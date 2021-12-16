const Admin = require('../models/Admin');

const postAdmin = async (req, res) => {
  const admin = await Admin.create(req.body).select('-password');
  res.status(200).json({ admin });
};
const getAdmins = async (req, res) => {
  const admins = await Admin.find({}).select('-password');
  res.status(200).json({ admins });
};
const getAdmin = async (req, res) => {
  const { id } = req.params;
  const admin = await Admin.findById(id);
  if (admin) {
    res.status(200).json({ admin });
  } else {
    res.status(404).json({ error: 'Admin not found' });
  }
};
module.exports = {
  postAdmin,
  getAdmins,
  getAdmin
};
