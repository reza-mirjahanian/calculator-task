// const isTestMode = process.env.NODE_ENV === 'test';
const NODE_ENV = process.env.NODE_ENV || 'development';
const SERVER_URL = process.env.SERVER_URL || 'http://localhost';
const SERVER_PORT = process.env.SERVER_PORT || 30100;

export {
  SERVER_PORT,
  SERVER_URL,
  NODE_ENV,
};
