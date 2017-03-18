//@flow

const handlerReturn = {
  appId: undefined,
  registerHandlers: jest.fn()
};

const sdk = {
  handler: jest.fn(() => handlerReturn),
};

export default sdk;
