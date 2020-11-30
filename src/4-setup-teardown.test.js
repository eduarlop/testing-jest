import logger from "./utils/logger";

let originalLog;
const mockedLog = jest.fn();

describe("setup-teardown examples", () => {
  beforeAll(() => {
    originalLog = console.log;
    console.log = mockedLog;
  });
  afterAll(() => {
    console.log = originalLog;
  });

  it("calls the mocked function", () => {
    logger("message-1");
    expect(mockedLog).toHaveBeenCalledTimes(1);
    expect(mockedLog).toHaveBeenCalledWith("log message: message-1");
  });

  it("calls the mocked function again persists previous state", () => {
    logger("message-2");
    expect(mockedLog).toHaveBeenCalledTimes(2);
    expect(mockedLog).toHaveBeenCalledWith("log message: message-2");
  });

  describe("nested block becomes closure for setup/teardown functions", () => {
    beforeEach(() => {
      mockedLog.mockClear();
    });
    it("calls the mocked function again, but the state was cleared", () => {
      logger("message-3");
      expect(mockedLog).toHaveBeenCalledTimes(1);
      expect(mockedLog).toHaveBeenCalledWith("log message: message-3");
    });

    it("calls the mock again, but the state was cleared as well ", () => {
      logger("message-4");
      expect(mockedLog).toHaveBeenCalledTimes(1);
      expect(mockedLog).toHaveBeenCalledWith("log message: message-4");
    });
  });
});
