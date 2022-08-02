export type CalcInput = {
  value: string,
  type: 'number' | 'operator',
};

export type ClientMessage = {
  data: { operation: string, digits: string }
};
