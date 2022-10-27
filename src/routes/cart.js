import { Router } from "express";
import { createCart, deleteCart, getCart, updateCart } from "../controllers/cart.js";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken.js";

const router = Router();

router.post('/', verifyTokenAndAuthorization, createCart);
router.post('/:id', verifyTokenAndAuthorization, updateCart);
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);
router.get("/:userId", verifyTokenAndAuthorization, getCart);
router.get('/', verifyTokenAndAdmin, getCart)

export default router;