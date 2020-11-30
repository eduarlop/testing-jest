export function getCoordinates(city) {
  if (!city) {
    return Promise.reject({
      error: 'City not found.',
    });
  }
  return Promise.resolve([123, 456]);
}
