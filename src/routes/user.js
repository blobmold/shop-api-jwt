import { Router } from "express";
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/user.js";
import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const router = Router();

router.get("/", verifyTokenAndAdmin, getUsers);
router.get("/:id", verifyTokenAndAuthorization, getUser);
router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

export default router;
