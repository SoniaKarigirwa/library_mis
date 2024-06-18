import Joi from "joi";
import { errorResponse } from "../utils/api.response.js";

export async function validateUserRegistration(req, res, next) {
  try {
    const schema = Joi.object({
      firstName: Joi.string().label("firstName"),
      lastName: Joi.string().label("lastName"),
      email: Joi.string().email().required().label("Email"),
      password: Joi.string().min(6).required().label("Password"),
    });

    const { error } = schema.validate(req.body);
    if (error) return errorResponse(error.message, res);

    return next();
  } catch (ex) {
    return errorResponse(ex.message, res);
  }
}

export async function validateLogin(req, res, next) {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required().label("Email"),
      password: Joi.string().min(6).required().label("Password"),
    });

    const { error } = schema.validate(req.body);
    if (error) return errorResponse(error.message, res);

    return next();
  } catch (ex) {
    return errorResponse(ex.message, res);
  }
}
