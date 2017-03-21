//@flow

import { welcomeString, helpString } from './strings.js';
import phonetic from './phonetic.js';

const handlers = {
    'LaunchRequest': function() {
        this.emit(':tell', welcomeString);
    },
    'AMAZON.HelpIntent': function() {
        this.emit(':tell', helpString);
    },
    'Unhandled': function() {
        //error message
    },
    'PhoneticForLetterIntent': function() {
        const letter = this.event.request.intent.slots.Letter.value;
        const answer = phonetic[letter];        

        this.emit(':tell', `The phonetic for the letter ${letter} is ${answer}`);
    },
};

export default handlers;
