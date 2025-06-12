import express from "express";
// import loginRoutes from "./loginRoutes.js";
import registers from "./registers.js";


const router = express.Router();

// router.use("/login", loginRoutes);
router.use("/registers", registers);

export default router;