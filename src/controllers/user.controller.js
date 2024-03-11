import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (re,res) =>{
    res.status(200).json({
        message:"Learn Backend from Chai Aur Code"
    })
} )


export {registerUser}
