//@flow

import Alexa from 'alexa-sdk';
import handlers from '../handlers.js';

jest.unmock('../handlers.js');

describe('intents', () => {
    describe('launch intent handler', () => {
        it('should invoke the emit method with the correct parameters', () => {
            const alexa = Alexa.handler();

            alexa.emit.mockClear();

            handlers.LaunchRequest.call(alexa);

            expect(alexa.emit).toHaveBeenCalledWith(':tell', alexa.t("WELCOME"));
        });
    });

    describe('help intent handler', () => {
        it('should invoke the emit method with the correct parameters', () => {
            const alexa = Alexa.handler();

            alexa.emit.mockClear();

            handlers['AMAZON.HelpIntent'].call(alexa);

            expect(alexa.emit).toHaveBeenCalledWith(':tell', alexa.t("HELP"));
        });
    });

    describe('phonetic for letter intent handler', () => {
        it('should do something', () => {

        });
    });
});
