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


describe("Snapshot example", () => {
  it("checks against expected values", () => {

    // Useful if the output is not deterministic on runtime
    // so you don't know what to check against
    // (however your test output SHOULD be deterministic)
    expect(object).toMatchSnapshot();
  });
});
