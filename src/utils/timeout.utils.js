const timeout = (setter, duration, value = false) =>
  setTimeout(() => setter(value), duration);

export { timeout };
