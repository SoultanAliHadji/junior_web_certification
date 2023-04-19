//importing important functions and libraries
import express from "express";
import { getApplications, getApplicationById, createApplication, updateApplication, deleteApplication } from "../controllers/ApplicationController.js";

//making REST API http request routes
const router = express.Router();

router.get("/applications", getApplications);
router.get("/applications/:id", getApplicationById);
router.post("/applications", createApplication);
router.put("/applications/:id", updateApplication);
router.delete("/applications/:id", deleteApplication);

export default router;
