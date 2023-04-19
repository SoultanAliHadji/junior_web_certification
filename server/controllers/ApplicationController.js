//importing important functions
import Application from "../models/ApplicationModel.js";

//function for REST API http get request
export const getApplications = async (req, res) => {
  try {
    const response = await Application.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//function for REST API http get request basen on application id
export const getApplicationById = async (req, res) => {
  try {
    const response = await Application.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

//function for REST API http post request
export const createApplication = async (req, res) => {
  try {
    await Application.create(req.body);
    res.status(201).json({ msg: "Application created" });
  } catch (error) {
    console.log(error.message);
  }
};

//function for REST API http put request
export const updateApplication = async (req, res) => {
  try {
    await Application.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Application updated" });
  } catch (error) {
    console.log(error.message);
  }
};

//function for REST API http delete request
export const deleteApplication = async (req, res) => {
  try {
    await Application.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Application deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
