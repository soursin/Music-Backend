import {Router,Request,Response} from "express"

export const userRouter = Router();

userRouter.get("/",async (req : Request,res : Response) =>{
    res.status(200).json({
        msg : "Hello"
    })
})

userRouter.post("/add-user",async(req:Request , res: Response) =>{
    res.status(200).json({
        msg : "Hello"
    })
})

userRouter.delete("/:id",async(req:Request , res: Response) =>{
    res.status(200).json({
        msg : "Hello"
    })
})

userRouter.put("/update-password",async(req:Request , res: Response) =>{
    res.status(200).json({
        msg : "Hello"
    })
})