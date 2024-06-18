import UserModel from "../models/userModel.js";
import { errorResponse, serverErrorResponse, successResponse } from "../utils/api.response.js";
import { signToken } from "../utils/jwt.utils.js";

export const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        let findUserByEmail = await UserModel.findOne({
            where: {
                email
            }
        });
        // console.log(newUser);
        if (!findUserByEmail) return errorResponse("Invalid email or password!", res)

        const validPassword = await compare(password, findUserByEmail.password);
        if (!validPassword) return errorResponse('Invalid email or password!', res);

        const token = signToken({ id: findUserByEmail.id });

        return successResponse("Login successful!", { access_token: token }, res);

    } catch (error) {
        return serverErrorResponse(error, res);
    }
};

const compare = (inputPassword, userPassword) => {
    return inputPassword === userPassword
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        res.send(users);
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const users = await UserModel.findOne({ id });
        res.send(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await UserModel.create({
            firstName,
            lastName,
            email,
            password
        });
        res.status(201).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateUserById = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await UserModel.update({ firstName, lastName, email, password }, { where: { id: req.params.id } });
        res.status(201).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.destroy({ where: { id } });
        res.status(201).send(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}










