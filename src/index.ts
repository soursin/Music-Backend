import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routers/users";
import { artistRouter} from "./routers/artists";
import { albumRouter } from "./routers/albums";
import { favourateRouter } from "./routers/favourates";
import { trackRouter } from "./routers/tracks";

const app = express();
//Middlewares
app.use(express.json());
app.use("/api/v1/users",userRouter);
app.use("/api/v1/artists",artistRouter);
app.use("/api/v1/albums",albumRouter);
app.use("/api/v1/tracks",trackRouter);
app.use("/api/v1/favourates",favourateRouter);




app.listen(3000);
