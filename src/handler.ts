import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';

export const helloWorld:APIGatewayProxyHandler = async (event):Promise <APIGatewayProxyResult> => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World! Go Serverless',
      input: event,
    }),
  };
  return response;
};
