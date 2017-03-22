//@flow

const handlerReturn = {
  appId: undefined,
  registerHandlers: jest.fn(),
  execute: jest.fn(),
  emit: jest.fn(),
  t: jest.fn((key) => key),
};

const sdk = {
  handler: jest.fn(() => handlerReturn),
};

export default sdk;
