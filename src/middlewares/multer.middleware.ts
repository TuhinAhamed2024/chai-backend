import multer from "multer";
const UploadOnMuter: any = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/temp");
  },
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});
export const upload = multer(UploadOnMuter);
