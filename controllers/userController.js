// controllers/userController.js
const User = require('../models/User');

// Create User
const createUser = async (req, res) => {
  const { name, email, mobile } = req.body;

  try {
    const user = await User.create({ name, email, mobile });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get User
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createUser, getUser };
