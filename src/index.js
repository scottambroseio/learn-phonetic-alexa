//@flow

import Alexa from 'alexa-sdk';
import { load } from 'dotenv';
import handlers from './handlers.js';

load();

const handler = (event: any, context: any, callback: Function): any =>{
  let alexa = Alexa.handler(event, context);

  alexa.appId = process.env.ALEXA_APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();

  return alexa;
};

export {
    handler
}
