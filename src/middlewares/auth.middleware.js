import { jwt } from "jsonwebtoken";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";


export const verifyJWT = asyncHandler (async (req,res,next)=>{
    const token = req.cookies?.accessToken  ||  req.header("Authorization")?.replace("Bearer ","")

    if(!token)
    {
        throw ApiError(401,"Unauthorized request")
    }

    
})