import dotenv from 'dotenv'
dotenv.config()
const _config = {
  port: process.env.PORT,
  cors_origin: process.env.CORS_ORIGIN,
  mongodb_uri: process.env.MONGODB_URI as string,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
  access_token_expiry: process.env.ACCESS_TOKEN_EXPIRY as string,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET as string,
  refresh_token_expiry: process.env.REFRESH_TOKEN_EXPIRY as string,
  limit:process.env.LIMIT as string,
};
export const config= Object.freeze(_config)