import {Router} from 'express'
import { register } from '../controller/user.controller';
const router = Router();
// routes
router.route("/users/auth/register").post(register)
export default router;