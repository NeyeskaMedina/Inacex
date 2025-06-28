import express from "express";

import { verifyActivity } from "../../middleware/reports.js"
import { getEmail } from "../../src/api/v1/controllers/emails/getEmail.js";

const router = express.Router();

router.get("/", verifyActivity, getEmail)

export default router;