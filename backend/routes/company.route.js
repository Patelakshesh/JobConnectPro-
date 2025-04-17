import express from "express";
import { companyRegister, getCompany, getCompanyId, updateCompany } from "../controllers/company.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,companyRegister)
router.route("/get").get(isAuthenticated,getCompany)
router.route("/get/:id").get(isAuthenticated,getCompanyId)
router.route("/update/:id").put(isAuthenticated, singleUpload, updateCompany)

export default router;