'use strict';

module.exports.helloWorld = async (event, callback) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World, I have done it!',
        input: event,
      }
    )
  };
};

