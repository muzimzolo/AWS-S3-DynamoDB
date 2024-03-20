exports.handler = async (event) => {
    console.log("event:", JSON.stringify(event, undefined, 2));
    // List objects into bucket

    // Write on dynamodb
    
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
  };
  