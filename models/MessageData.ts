import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema({
    fullname:{
        type:String,
        required:true,
    },
   
    email:{
        type:String,
        required: true,
        
    }, 
    
    message:{
        type:String,
        required: true,
        
    }, 
   
},
{timestamps:true}
)
 
export default mongoose.models.MessageData || mongoose.model("MessageData",messageSchema)