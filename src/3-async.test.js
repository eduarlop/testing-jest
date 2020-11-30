import { getCoordinates } from "./utils/georeference";

// Do not add the async keyword here, as it does nothing
describe("getCoordinates", () => {
  // You can provide the async keyword to the test case
  it("retrieves the coordinates of a city", async () => {
    const city = "Guadalajara";

    // Then, you can await for the results
    const result = await getCoordinates(city);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(2);
  });

  // You should also test for failing cases
  it("throws an error if city does not exists", async () => {
    const city = "";

    expect(() => getCoordinates(city)).rejects.toThrowError();
  });
});
