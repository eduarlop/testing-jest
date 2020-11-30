export function getCoordinates(city) {
  if (!city) {
    return Promise.reject();
  }
  return Promise.resolve([123, 456]);
}
