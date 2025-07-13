import express from "express";

import { verifyActivity } from "../../middleware/reports.js"
import { addRegister } from "../../src/api/v1/controllers/registers/postRegister.js";
import { getRegister } from "../../src/api/v1/controllers/registers/getRegister.js";
import { putRegister } from "../../src/api/v1/controllers/registers/putRegister.js";
import { auth } from "../../middleware/auth.js"
// import { getProducts } from "../../src/api/v1/controllers/getProductsControllers.js";
// import { deleteCSV } from "../../src/api/v1/controllers/deleteProductsControllers.js"

const router = express.Router();

router.post("/", verifyActivity, addRegister)
router.get('/', verifyActivity, auth, getRegister)
router.put('/:id', verifyActivity, auth, putRegister)
// router.delete('/', verifyActivity, delRegister)

export default router;