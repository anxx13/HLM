const { StatusCodes } = require('http-status-codes');
const Patient = require('../models/Patient');
const getPatientDetails = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.find({ _id: id }).select('-password');

  res.status(StatusCodes.OK).json({ patient });
};
const getAllPatientDetails = async (req, res) => {
  const patients = await Patient.find({}).select('-password');
  res.status(StatusCodes.OK).json({ patients });
};
const updatePatient = async (req, res) => {
  const { id } = req.params.id;
  const patient = await Patient.findByIdAndUpdate(id, req.body);
  res.status(StatusCodes.OK).json({ patient });
};
const deletePatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findByIdAndDelete(id);
  console.log(patient)
  console.log(id)
  if (patient) {
    res.status(StatusCodes.OK);
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Patient not found' });
  }
};

module.exports = {
  getPatientDetails,
  getAllPatientDetails,
  updatePatient,
  deletePatient,
};
