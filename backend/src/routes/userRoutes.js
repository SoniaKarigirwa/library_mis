import { login, getAllUsers, getUserById, createUser, updateUserById, deleteUserById }  from '../controllers/userController.js';
import express from 'express';
import { validateUserRegistration, validateLogin } from '../validators/userValidator.js';



const userRoutes = express.Router();

userRoutes.post('/login', validateLogin, login)
userRoutes.get('/users', getAllUsers)
userRoutes.get('/user/:id', getUserById)
userRoutes.post('/users/addUser', validateUserRegistration, createUser)
userRoutes.put('/users/updateUser/:id', updateUserById)
// userRoutes.delete('/users/deleteUser/:id', deleteUserById)

export default userRoutes