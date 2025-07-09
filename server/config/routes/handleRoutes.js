import express from "express";
// import loginRoutes from "./loginRoutes.js";
import registers from "./registers.js";
import emails from "./emails.js";
import login from "./login.js";

const router = express.Router();

// router.use("/login", loginRoutes);
router.use("/registers", registers);
router.use("/confirmar-correo", emails);
router.use("/login", login);

export default router;