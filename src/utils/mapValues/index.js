const mapValues = (object, transformFn) => {
  return Object.entries(object).reduce((a, [key, value]) => {
    a[key] = transformFn(value);
    return a;
  }, {});
};

export default mapValues;
