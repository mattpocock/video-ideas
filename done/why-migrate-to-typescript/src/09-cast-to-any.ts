const toCamelCaseKeys = (obj: any) => {
  return Object.keys(obj).reduce((acc, key) => {
    const camelCaseKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    acc[camelCaseKey] = obj[key];
    return acc;
  }, {} as any);
};
