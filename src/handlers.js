//@flow

import { welcomeString } from './strings.js';

const handlers = {
    'LaunchRequest': function() {
        this.emit(':tell', welcomeString);
    }
};

export default handlers;
