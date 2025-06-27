import express from "express";

import { verifyActivity } from "../../middleware/reports.js"
import { addRegister } from "../../src/api/v1/controllers/registers/postRegister.js";
import { getRegister } from "../../src/api/v1/controllers/registers/getRegister.js";
// import { getProducts } from "../../src/api/v1/controllers/getProductsControllers.js";
// import { deleteCSV } from "../../src/api/v1/controllers/deleteProductsControllers.js"

const router = express.Router();

router.post("/", verifyActivity, addRegister)
router.get('/', verifyActivity, getRegister)
// router.delete('/', verifyActivity, delRegister)

export default router;