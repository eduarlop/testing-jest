const object = {
  id: 1234,
  name: "foo bar",
  skills: ["code", "teach", "learn"],
  url: "https://github.com/foobar",
  preferences: {
    theme: "dark"
  },
  active: true,
  isSubscribed: false
};

describe("Expect examples", () => {
  it("checks against expected values", () => {
    // Strict equality check
    expect(object.id).toBe(1234);

    // Compares keys recursively
    expect(object.preferences).toEqual({ theme: "dark" });

    // Checks if a value is defined
    expect(object.name).toBeDefined();

    // Checks if a value is thruty; e.g. true, 1, 'abc'
    expect(object.active).toBeTruthy();

    // Checks if a value is falsy; e.g. false, 0, null
    expect(object.isSubscribed).toBeFalsy();

    // Checks if value is of a given instance
    expect(object.skills).toBeInstanceOf(Array);

    // Checks if value is in an array
    // Also can check if a string is a substring of the other
    expect(object.skills).toContain("teach");

    // Checks if value is in an array, comparing key and values
    expect(object.name).toContain("bar");

    // Useful if the output is not deterministic on runtime
    // so you don't know what to check against
    // (however your test output SHOULD be deterministic)
    expect(object).toMatchSnapshot();
  });

  it("checks on data structures", () => {
    expect(object).toEqual({
      id: expect.any(Number),
      name: expect.stringContaining("foo"),
      skills: expect.arrayContaining([expect.any(String)]),
      url: expect.stringMatching(/^https?:\/\//i),
      preferences: expect.objectContaining({
        theme: expect.stringMatching(/^light|dark$/)
      }),
      active: expect.any(Boolean),
      isSubscribed: expect.any(Boolean)
    });
  });

  it("partially checks data structures", () => {
    expect(object).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.stringContaining("foo"),
        active: expect.any(Boolean)
      })
    );
  });
});
