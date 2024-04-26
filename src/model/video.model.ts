import {Schema,model} from 'mongoose'
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new Schema({
  videoFile:{
    type:String, // ? url comes from cloudinary
    required:true,
  },
  thumbnail:{
    type:String, // ? url comes from cloudinary
    required:true,
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
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
    type:Number, 
    default:false,
  },
  views:{
    type:Number, 
    default:0,
  },
  isPublished:{
    type:Boolean, 
    default:false,
  },
},{
  timestamps:true,
});
videoSchema.plugin(mongooseAggregatePaginate);
export const Video = model("Video",videoSchema);