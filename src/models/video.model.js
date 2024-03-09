import mongoose from "mongoose";

const videoSchema =new mongoose.Schema(
    {
        videoFile:{
            type:String,  //cloudnary url
            required:true,
             
        },
        thumbnail:{
            type:String,  //cloudnary url
            required:true,
        },
        title:{
            type:String,  
            required:true,
        },
        description:{
            type:String,  
            required:true,
        },
        duration:{
            type:Number,  //cloudnary url
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        Owner:
        {
            type:Schema.Types.ObjectId,
            ref:"User"

        }

    },
    {
        timestamps:true
    }
)


export const Video =mongoose.model("Video",videoSchema)