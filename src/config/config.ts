const _config = {
  port: process.env.PORT,
  cors_origin: process.env.CORS_ORIGIN,
  mongodb_uri: process.env.MONGODB_URI,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  access_token_expiry: process.env.ACCESS_TOKEN_EXPIRY,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
  refresh_token_expiry: process.env.REFRESH_TOKEN_EXPIRY,
  limit:process.env.LIMIT,
};
export const config= Object.freeze(_config)