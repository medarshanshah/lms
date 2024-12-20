require("dotenv").config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {ErrorMiddleware} from "./middleware/error";
import userRouter from "./routes/user.route";
export const app = express();

//body parser
app.use(express.json({limit: "50mb"}))  

//cookie parser
app.use(cookieParser());

//cors = cross origin resource sharing
app.use(cors({origin: process.env.ORIGIN})); // from .env file ORIGIN = ['http.//localhost:3000']

//routes
app.use("/api/v1", userRouter);

// requests
app.get("/test", (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Hello, World!"
    })
})

app.all("*", (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
})

app.use(ErrorMiddleware);