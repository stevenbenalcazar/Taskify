import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: process.env.AWS_REGION });
export default dynamoDB;