import mongoose, { Schema } from "mongoose";
import jwt  from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema =new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            
        },
        fullname:{
            type:String,
            required:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,    //cloudinary url
            required:true,
            
        },
        coverImage:{
            type:String,        ////cloudinary url
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"video"
            }
        ],
        password:{
            type:String,
            required:[true,'PassWord is Required']
        },
        refreshToken:{
            type:String
        }
    },
    {
        timestamps:true
    }
    
    )

userSchema.pre("save",async function (next){
    this.password=bcrypt.hash(this.password,10)
    next()

})
export const User= mongoose.model("User",userSchema);