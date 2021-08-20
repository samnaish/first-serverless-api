exports.helloWorld = async (event) => {
  console.log('request successful!');
  const rawDateString = new Date();
  const neatDate = rawDateString.toLocaleDateString();
  const time = rawDateString.toLocaleTimeString();
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World, I have done it!',
        date: neatDate,
        time: time,
        input: event.queryStringParameters
      }
    )
  };
  return response;
};

exports.getParams = async (event) => {
  const query = event.queryStringParameters;
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: `This is the POST endpoint.`,
        input: query
      }
    )
  };
};
