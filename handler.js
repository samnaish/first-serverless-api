// import { connectToDatabase } from "./lib/database";

module.exports.helloWorld = async () => {
  console.log('GET request successful!');
  const rawDateString = new Date();
  const neatDate = rawDateString.toLocaleDateString();
  const time = rawDateString.toLocaleTimeString();
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World, I have done it!',
        date: neatDate,
        time: time
      }
    )
  };
  return response;
};

module.exports.getParams = async (event, context, callback) => {
  console.log('POST request successful!');
  const query = event.queryStringParameters;
  const response = {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: `This is the POST endpoint.`,
        input: query
      }
    )
  };
  callback(null, response);
};
