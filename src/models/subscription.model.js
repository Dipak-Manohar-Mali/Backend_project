import mongoose from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.types.ObjectId,     // one who is subscribing
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId, //one to whom subscriber
        ref:"User"
    }
},{timestamps:true})





export const Subscription = mongoose.model("Subscription",subscriptionSchema)