import express from "express";
import { createUser, loginUser, getUsers , getLogin} from "../controllers/user.js";
import { createJob, geteJobs,  updateJob, deleteJob } from "../controllers/jobs.js";
import { newCustomer, getAppliedJobs } from "../controllers/applyjobs.js";
const router = express.Router();

router.post("/signupUsers", createUser);
router.get("/signupUsers", getUsers);
router.post("/login", loginUser);
router.get("/login", getLogin);
router.post("/posts", createJob);
router.get("/posts", geteJobs);
router.post("/applythejob", newCustomer);
router.get("/applythejob", getAppliedJobs);

router.put("/posts/:id", updateJob); 
router.delete("/posts/:id", deleteJob);

export default router;
 