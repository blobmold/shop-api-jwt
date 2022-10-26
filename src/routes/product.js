import { Router } from "express";
import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.js";

const router = Router();

router.post("/", verifyTokenAndAdmin, createProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);

export default router;
