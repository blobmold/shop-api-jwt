import { Router } from "express";
import userRouter from "./user.js";
import authRouter from "./auth.js";
import productRouter from "./product.js"

const router = Router();

router.use("/v1/user", userRouter);
router.use("/v1/auth", authRouter);
router.use("/v1/product", productRouter);

export default router;
