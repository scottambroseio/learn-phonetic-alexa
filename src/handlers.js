//@flow

import phonetic from './phonetic.js';
import includes from 'lodash.includes';

const handlers = {
    'LaunchRequest': function() {
        this.emit(':tell', this.t("WELCOME"));
    },
    'AMAZON.HelpIntent': function() {
        this.emit(':tell', this.t("HELP"));
    },
    'Unhandled': function() {
        this.emit(':tell', this.t("UNHANDLED_INTENT"));
    },
    'PhoneticForLetterIntent': function() {
        const letter = this.event.request.intent.slots.Letter.value;
        const answer = phonetic[letter];

        // check for invalid slot values
        if(!includes(Object.keys(phonetic), letter)) {
            this.emit(':tell', this.t('INVALID_LETTER_SLOT'))
            return;
        }

        this.emit(':tell', this.t('PHONETIC_FOR_LETTER_RESPONSE', { letter, answer }));
    },
};

export default handlers;
