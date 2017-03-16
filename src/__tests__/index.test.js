//@flow
import Alexa from 'alexa-sdk'
import { handler } from '../index.js';

jest.unmock('../index.js')

describe("index", () => {
  it("handler should invoke the Alexa.handler method with the correct parameters", () =>{
      const event = {
          event: "event"
      };

      const context = {
          context: "context"
      };

      handler(event, context, () => {});

      expect(Alexa.handler).toHaveBeenCalledWith(event, context)
  });
});
