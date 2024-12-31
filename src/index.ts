import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { userRouter } from "./routers/users";
import { artistRouter} from "./routers/artists";
import { albumRouter } from "./routers/albums";
import { favourateRouter } from "./routers/favourates";
import { trackRouter } from "./routers/tracks";

dotenv.config();
const app = express();

//Middlewares
app.use(express.json());
app.use("/api/v1/users",userRouter);
app.use("/api/v1/artists",artistRouter);
app.use("/api/v1/albums",albumRouter);
app.use("/api/v1/tracks",trackRouter);
app.use("/api/v1/favourates",favourateRouter);



async function main(port: Number){
    app.listen(port);
    await mongoose.connect(process.env.database as string);
    console.log(`Backend started port at ${port} and database connected`);
}

main(3000);

