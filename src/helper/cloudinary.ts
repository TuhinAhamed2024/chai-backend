import { v2 as cloudinary } from 'cloudinary'
import { config } from '../config/config';
import createHttpError from 'http-errors';
cloudinary.config({
  cloud_name:config.cloudinary_cloud_name,
  api_key:config.cloudinary_cloud_api_key,
  api_secret:config.cloudinary_api_secret
})
const uploadOnCloudinary = async (localFilePath:any) =>{
  try {
    if (!localFilePath) {
      createHttpError(400,"file is missing")
    }
    const upload = await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
    })
    console.log(`file uploaded successfully`)
    return upload;
  } catch (error) {
    createHttpError(500,"Can't upload files")
  }
}
export default uploadOnCloudinary;