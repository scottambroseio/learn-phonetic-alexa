//@flow
import Alexa from 'alexa-sdk';
import { load } from 'dotenv';

// load env vars for development
load();

const handler = (event: any, context: any, callback: Function): any =>{
  var alexa = Alexa.handler(event, context);
  alexa.appId = process.env.ALEXA_APP_ID;

  return alexa;
};

export {
    handler
}
