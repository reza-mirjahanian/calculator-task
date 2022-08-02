import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

import {
  SERVER_PORT,
  SERVER_URL,
} from './constants';

import Logger from './utils/logger';
import Calc from './services/calculator';
import { ClientMessage } from './types';
import { normalize } from './services/input.normalize';

const app = express();

app.use(cors({
  origin: '*',
}));

const server = app.listen(SERVER_PORT, () => Logger.log(`✅  Ready on  ${SERVER_URL}:${SERVER_PORT}`));
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});
io.on('connection', (socket) => {
  // Todo refactor to a manager class
  Logger.log('a user connected');
  const calculator = new Calc();
  socket.on('client.btnPressed', (msg:ClientMessage) => {
    Logger.log('client.btnPressed');
    if (msg && msg.data) {
      const { data: { operation, digits } } = msg;
      const normalizeOp = normalize(operation);

      const normalizeDigits = normalize(digits);
      if (normalizeDigits && normalizeOp) {
        if (normalizeOp.value === 'AC') {
          calculator.reset();
        } else {
          calculator.insertItem(normalizeDigits);
          calculator.insertItem(normalizeOp);
          const result = calculator.lastResult();

          // send error too
          if (result) {
            socket.emit('server.response', {
              data: {
                result,
              },
              status: 'OK',
            });
          }
        }
      }
    }
  });
});
