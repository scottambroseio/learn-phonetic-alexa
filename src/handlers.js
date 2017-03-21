//@flow

import { welcomeString, helpString } from './strings.js';

const handlers = {
    'LaunchRequest': function() {
        this.emit(':tell', welcomeString);
    },
    'AMAZON.HelpIntent': function() {
        this.emit(':tell', helpString);
    },
    'PhoneticForLetterIntent': function() {
        console.log(this.event.request.intent.slots.Letter.value);
        this.emit(':tell', `you asked for the phonetic of the letter ${this.event.request.intent.slots.Letter.value}`);
    },
};

export default handlers;
