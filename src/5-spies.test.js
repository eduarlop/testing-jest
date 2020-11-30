describe("Spies examples", () => {
  it("keeps track of the function invocations", () => {
    // Use jest.fn() to create a mock
    const mockFn = jest.fn();

    // Execute the mock
    mockFn();
    mockFn(123);

    // Asserts about function call history
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenNthCalledWith(2, 123);
    expect(mockFn).toHaveLastReturnedWith(undefined);
  });

  it("can receive a mock-implementation function", () => {
    // Provide a function to implement logic of the mock
    const mockFn = jest.fn((num) => num * 2);

    mockFn(123);

    expect(mockFn).toHaveLastReturnedWith(246);
  });

  it("executes one time per value in an array", () => {
    const mockFn = jest.fn();
    const arr = [1, 2, 3, 4];

    arr.forEach(mockFn);

    expect(mockFn).toHaveBeenCalledTimes(arr.length);
  });
});
