describe("Spies Mocks examples", () => {
  it("can mock return values of a spy", () => {
    const mockFn = jest.fn();

    // Mocks the return value of the mock function
    mockFn.mockReturnValue(123);

    // Execute the mocked function
    const result = mockFn();

    // Asserts about mocked result
    expect(result).toBe(123);
  });

  it("can mock the implementation details of a spy on runtime", () => {
    // Initialize a default mock function
    const mockFn = jest.fn();

    // Provide a function to implement logic of the mock
    mockFn.mockImplementation((num) => num * 2);

    const result = mockFn(123);

    expect(result).toBe(246);
  });

  it("can mock the details only once", () => {
    const mockFn = jest.fn(() => 123);

    // Mock temporarily the return value
    mockFn.mockReturnValueOnce(456);

    const result1 = mockFn();
    const result2 = mockFn();

    // Returns the mocked value
    expect(result1).toBe(456);
    // Returns whatever value it would have returned originally
    expect(result2).toBe(123);
  });
});
