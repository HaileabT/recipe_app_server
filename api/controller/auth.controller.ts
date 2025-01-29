import { Request, Response } from "express";

import { CreateUser } from "../types/user/UserRequest";
import { AuthService } from "../../shared/services/auth.service";
import { DBUserRepository } from "../../database/repositories/DBUserRepository";
import { AppError } from "../types/app/AppError";
import { HashService } from "../../shared/services/hash.service";

export const login = async (req: CreateUser, res: Response) => {
  const { username, password } = req.body;

  const authService = AuthService.getService();
  const hashService = HashService.getService();
  const userRepo = DBUserRepository.getRepository();

  const user = await userRepo.findByUsername(username);
  if (!user) throw new AppError(404, "User not found");

  const isPasswordValid = await hashService.compare(password, user.password);
  if (!isPasswordValid)
    throw new AppError(402, "Incorrect username or password");

  const token = await authService.sign(user.id);
  if (!token) throw new AppError(500, "Something went wrong");

  res.cookie("auth-token", token, {
    maxAge: 3600 * 1000 * 24 * 30,
    httpOnly: true,
    secure: false,
  });
};
