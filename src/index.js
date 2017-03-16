//@flow
import Alexa from 'alexa-sdk';

const handler = (event: any, context: any, callback: Function):void =>{
    var alexa = Alexa.handler(event, context);
};

export {
    handler
}
