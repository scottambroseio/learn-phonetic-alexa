//@flow

import Alexa from 'alexa-sdk';
import handlers from '../handlers.js';
import { welcomeString } from '../strings.js';

jest.unmock('../handlers.js');
jest.unmock('../strings.js');

describe('intents', () => {
    describe('launch intent handler', () => {
        it('invoke the emit method with the correct parameters', () => {
            const alexa = Alexa.handler();

            handlers.LaunchRequest.call(alexa);

            expect(alexa.emit).toHaveBeenCalledWith(':tell', welcomeString);
        });
    });
});
