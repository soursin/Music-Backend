import {Router,Request,Response} from "express"

export const favourateRouter = Router();

favourateRouter.get("/:category", async (req:Request , res: Response) => {

})

favourateRouter.post("/add-favorite", async (req:Request , res: Response) => {
    
})

favourateRouter.delete("/remove-favorite/:id", async (req:Request , res: Response) => {
    
})
