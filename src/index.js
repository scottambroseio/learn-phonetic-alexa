// @flow

import Alexa from 'alexa-sdk';
import { load } from 'dotenv';
import handlers from './handlers.js';
import languageStrings from './languageStrings.js';

load();

const handler = (event: any, context: any): any => {
  const alexa = Alexa.handler(event, context);

  alexa.appId = process.env.ALEXA_APP_ID;
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();

  return alexa;
};

export { handler };
