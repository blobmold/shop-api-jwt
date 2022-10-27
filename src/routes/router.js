import { Router } from "express";
import userRouter from "./user.js";
import authRouter from "./auth.js";
import productRouter from "./product.js"
import cartRouter from "./cart.js"

const router = Router();

router.use("/v1/user", userRouter);
router.use("/v1/auth", authRouter);
router.use("/v1/product", productRouter);
router.use("/v1/cart", cartRouter);

export default router;
