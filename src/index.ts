import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { config } from "./config/config";
import ConnectDB from "./db/database";
ConnectDB()
  .then(() => {
    const port = config.port || 3000;
    app.listen(port, () => {
      console.log(`server is running at ${port}`);
    });
  })
  .catch((err) => {
    console.log(`server error`, err);
  });
