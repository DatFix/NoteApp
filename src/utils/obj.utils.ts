export const getPropertyFromString = (obj: any, propString: string) => {
  return propString
    .split('.')
    .reduce((o, key) => (o ? o[key] : undefined), obj);
};

export function deleteByPath(obj: any, path: string) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const parent = keys.reduce((acc, key) => acc?.[key], obj);

  if (parent && lastKey && lastKey in parent) {
    delete parent[lastKey];
  }
}