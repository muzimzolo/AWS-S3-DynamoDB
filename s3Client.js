import {S3Client} from "@aws-sdk/client-s3";
const REGION = "af-south-1";
const S3Client = new S3Client({ region: REGION });
export {S3Client};