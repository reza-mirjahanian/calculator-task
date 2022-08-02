import _ from 'lodash';
import { CalcInput } from '../types';

const validOps = ['+', '-', '/', '*', '%', 'AC', '='];

// We assume '.' equal to Zero!
const fixes : Record<string, string> = {
  '-0': '0',
  '-.': '0',
  '.': '0',
};

export const normalize = (rawInput: string):CalcInput | null => {
  let input = _.trim(rawInput);
  if (fixes[input]) {
    input = fixes[input];
  }
  if (validOps.includes(input)) {
    return {
      value: input,
      type: 'operator',
    };
  } if (input.match(/^[+-]?\d*(\.\d*)?$/)) {
    return {
      value: parseFloat(input).toString(),
      type: 'number',
    };
  }

  return null;
};
