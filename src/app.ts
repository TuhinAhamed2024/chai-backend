import cors from "cors";
import cookieParser from "cookie-parser";
import express from "express";
import { config } from "./config/config";
const app = express();
// cors configuration
app.use(cors({
    origin:config.cors_origin,
}));
app.use(express.json({
    limit:config.limit,
}));
app.use(express.urlencoded({
    limit:config.limit,
    extended:true as boolean,
}));
app.use(cookieParser());
// use public as a local storage
app.use(express.static("public"));
export default app;