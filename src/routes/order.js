import { Router } from "express";
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from "../controllers/order.js";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "../middleware/verifyToken.js";

const router = Router();

router.post("/", verifyTokenAndAuthorization, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete(":id", verifyTokenAndAdmin, deleteOrder);
router.get("/:userId", verifyTokenAndAuthorization, getOrder);
router.get("/", verifyTokenAndAdmin, getOrders);

export default router;