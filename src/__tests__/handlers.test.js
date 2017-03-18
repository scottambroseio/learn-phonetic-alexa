//@flow

import Alexa from 'alexa-sdk';
import handlers from '../handlers.js';
import { welcomeString, helpString } from '../strings.js';

jest.unmock('../handlers.js');
jest.unmock('../strings.js');

describe('intents', () => {
    describe('launch intent handler', () => {
        it('should invoke the emit method with the correct parameters', () => {
            const alexa = Alexa.handler();

            alexa.emit.mockClear();

            handlers.LaunchRequest.call(alexa);

            expect(alexa.emit).toHaveBeenCalledWith(':tell', welcomeString);
        });
    });
    describe('help intent handler', () => {
        it('should invoke the emit method with the correct parameters', () => {
            const alexa = Alexa.handler();

            alexa.emit.mockClear();

            handlers['AMAZON.HelpIntent'].call(alexa);

            expect(alexa.emit).toHaveBeenCalledWith(':tell', helpString);
        });
    });
});
