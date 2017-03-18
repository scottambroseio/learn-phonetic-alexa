//@flow

import { welcomeString, helpString } from './strings.js';

const handlers = {
    'LaunchRequest': function() {
        this.emit(':tell', welcomeString);
    },
    'AMAZON.HelpIntent': function() {
        this.emit(':tell', helpString);
    },
};

export default handlers;
