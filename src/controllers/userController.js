import { userModel } from '../models/userModel.js';

async function createuser(req, res) {
  const response = {
    message: 'Create user',
    data: null,
    error: null,
  };

  const { nombre: name } = req.body;

  if (!name) {
    response.error = 'Missing required parameters';
    return res.status(400).send(response);
  }

  const result = await userModel.createuser(name);

  if (!result) {
    return (response.error = 'Error creating user');
  }

  response.data = { insertId: result.insertId };
  return res.status(200).send(response);
}

async function getuser(req, res) {
  const response = {
    message: 'Get user',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const data = await userModel.getuser(id);

  if (!data) {
    response.error = 'Error getting user';
    return res.status(500).send(response);
  }

  if (data.length === 0) {
    response.error = 'User not found';
    return res.status(404).send(response);
  }

  response.data = data;
  return res.status(200).send(data);
}

async function getAllusers(req, res) {
  const response = {
    message: 'Get all users',
    data: null,
    error: null,
  };

  const data = await userModel.getAllusers();

  if (!data) {
    response.error = 'Error getting all users';
    return res.status(500).send(response);
  }

  // opcional
  // if (data.length === 0) {
  //   response.error = 'There is no users in the database';
  // }

  response.data = data;
  res.status(200).send(response);
}

async function updateuser(req, res) {
  const response = {
    message: 'Update user',
    error: null,
    data: null,
  };
  const { id } = req.params;
  const updatedData = req.body;

  if (!updatedData.nombre) {
    response.error = 'Missing required parameters';
    return res.status(400).send(response);
  }

  const result = await userModel.updateuser(id, updatedData);

  if (!result) {
    response.error = 'Error updating user';
    return res.status(500).send(response);
  }

  if (result.affectedRows === 0) {
    response.error = 'User not found';
    return res.status(404).send(response);
  }

  response.data = true;
  return res.status(200).send(response);
}

async function deleteuser(req, res) {
  const response = {
    message: 'Delete user',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await userModel.deleteuser(id);

  if (!result) {
    response.error = 'Error deleting user';
    return res.status(500).send(response);
  }

  if (result.affectedRows === 0) {
    response.error = 'User not found';
    return res.status(404).send(response);
  }

  response.data = true;
  return res.status(200).send(response);
}

export { createuser, getuser, getAllusers, updateuser, deleteuser };
