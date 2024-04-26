import { Router } from "express";
import { register } from "../controller/user.controller";
import { upload } from "../middlewares/multer.middleware";
const router = Router();
// routes
router.route("/users/auth/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1 as number,
    },
    {
      name: "coverImage",
      maxCount: 1 as number,
    },
  ]),
  register
);
export default router;
