//@flow

import Alexa from 'alexa-sdk';
import handlers from '../index.js';

jest.mock('alexa-sdk');

describe('intents', () => {
    describe('launch intent handler', () => {
        it('should invoke the emit method with the correct parameters', () => {
            const alexa = Alexa.handler();

            alexa.emit.mockClear();

            handlers['LaunchRequest'].call(alexa);

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
        it('should error if a invalid slot is provided', () => {
            const alexa = Alexa.handler();

            alexa.emit.mockClear();
            alexa.event = {
                request: {
                    intent: {
                        slots: {
                            Letter: {
                                value: ']'
                            }
                        }
                    }
                }
            };

            handlers['PhoneticForLetterIntent'].call(alexa);

            expect(alexa.emit).toHaveBeenCalledWith('ERROR');
        });

        it('shouldreturn the correct response', () => {
            const letter = 'a';
            const answer = 'alfa';
            const alexa = Alexa.handler();

            alexa.emit.mockClear();
            alexa.event = {
                request: {
                    intent: {
                        slots: {
                            Letter: {
                                value: letter
                            }
                        }
                    }
                }
            };

            handlers['PhoneticForLetterIntent'].call(alexa);

            expect(alexa.emit).toHaveBeenCalledWith(':tell', alexa.t('PHONETIC_FOR_LETTER_RESPONSE', { letter, answer }));
        });
    });

    describe('error handler', () => {
        it('should emit an error message', () => {
            const alexa = Alexa.handler();

            alexa.emit.mockClear();

            handlers['ERROR'].call(alexa);

            expect(alexa.emit).toHaveBeenCalledWith(':tell', alexa.t('ERROR'));
        });
    });
});
