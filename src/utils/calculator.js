export default {
  add: (n1, n2) => n1 + n2,
  multiply: (n1, n2) => n1 * n2
};

export const execute = (fn) => {
  return fn();
};
