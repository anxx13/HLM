const Admin = require('../models/Admin');
const Doctor = require('../models/Doctor');
const Patient = require('../models/Patient');
const { StatusCodes } = require('http-status-codes');
const Login = async (req, res) => {
  var { email, password, role } = req.body;
  console.log(role)
  console.log(req.body)
  if (!email || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: 'Please enter email and password' });
  }
  let currModel;
  if (role === 'admin') {
    currModel = Admin;
  } else if (role === 'doctor') {
    currModel = Doctor;
  } else {
    currModel = Patient;
  }
  const user = await currModel.findOne({ email: email });
  console.log(user)
  if (!user) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not found' });
  }

  const isCorrect = await user.checkPassword(password);

  if (isCorrect) {
    const token = user.generateAuthToken();
    res.status(StatusCodes.OK).json({ token });
  } else {
    res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Incorrect password' });
  }
};
const SignUp = async (req, res) => {
  const { role, user } = req.body;
  console.log(role);
  console.log(user);
  let currModel;
  if (role === 'admin') {
    currModel = Admin;
  } else if (role === 'doctor') {
    currModel = Doctor;
  } else {
    currModel = Patient;
  }
  console.log(currModel)
  const savedUser = await currModel.create({ ...user });

  if (savedUser) {
    const token = savedUser.generateAuthToken();
    res.status(StatusCodes.OK).json({ token });
    res.json(savedUser)
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'User not saved' });
  }
};

module.exports = { Login, SignUp };
