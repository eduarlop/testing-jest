// We import the dependency, but jest will replace it with the mock on runtime
import { fetchPokemon } from "./utils/pokeApi";

const pikachuMock = { id: 123, name: "Pikachu" };

// We mock the dependency by using the import path
jest.mock("./utils/pokeApi", () => {
  // We need to return the mocked implementation of the file
  // If the file exports more than one object, you need to mock them all
  // If the file exports a default, you use the "default" keyword for mocking
  return {
    // In this example the file only has one named-export, so we just mock it
    fetchPokemon: jest.fn((pokemonId) => {
      // We can mock the return value as long as we don't access outer scope
      return { id: pokemonId, name: "Ditto" };
    })
  };
});

describe("Mock dependencies examples", () => {
  it("returns mocked pokemon", () => {
    const result = fetchPokemon(456);

    expect(result.id).toBe(456);
    expect(result.name).toBe("Ditto");
  });

  it("allows re-defining implementation details on runtime", () => {
    // We can mock the implementation or return value
    // assigning any variable accessible from this scope
    fetchPokemon.mockReturnValueOnce(pikachuMock);
    const result = fetchPokemon(456);

    expect(result.id).toBe(pikachuMock.id);
    expect(result.name).toBe(pikachuMock.name);
  });
});
