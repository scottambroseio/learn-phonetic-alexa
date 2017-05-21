// @flow

import Alexa from 'alexa-sdk'
import { handler } from '../index.js';
import handlers from '../actions';

jest.mock('alexa-sdk');
jest.mock('dotenv');
jest.mock('../actions');

describe("index", () => {
  const event = {
    event: "event"
  };

  const context = {
    context: "context"
  };

  const callback = () => {};

  it("handler should invoke the Alexa.handler method with the correct parameters", () => {
      handler(event, context, callback)

      expect(Alexa.handler).toHaveBeenCalledWith(event, context)
  });

  it("should set the appId property", () => {
      const alexa = handler(event, context, callback);

      expect(alexa.appId).toBe(process.env.ALEXA_APP_ID);
  });

  it('should register intent handlers', () => {
      handler(event, context, callback);

      expect(Alexa.handler().registerHandlers).toHaveBeenCalledWith(handlers);
  });
});
