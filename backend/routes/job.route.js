import express from "express";
import { getAdminJobs, getAllJobs, getJobById, postJobs } from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


const router = express.Router();


router.route("/post").post(isAuthenticated,postJobs)
router.route("/get").get(isAuthenticated,getAllJobs)
router.route("/get/:id").get(isAuthenticated,getJobById)
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs)


export default router;