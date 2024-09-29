export function convertObjectToKVobjectArray(obj) {
  return Object.entries(obj).map(([key, value]) => ({
    key: key,
    value: value,
  }));
}
