import { Request, Response } from "express";
import { DBUserRepository } from "../../database/repositories/DBUserRepository";
import {
  CreateUser,
  UserByIdRequest,
  UserByUserName,
} from "../types/user/UserRequest";
import { ApiTerminal } from "../../utility/ApiTerminal";
import { IUser } from "../../domain/entities/IUser";
import { HashService } from "../../shared/services/hash.service";
import { AppError } from "../types/app/AppError";

export const findById = async (req: UserByIdRequest, res: Response) => {
  const userRepo = DBUserRepository.getRepository();
  const userId = req.params.id;
  if (!userId) throw new Error("Insert user id");

  const user = await userRepo.findById(userId);
  if (!user) throw new Error("user not found");

  ApiTerminal.respondWithSuccess<IUser>(res, user, 200);
};

export const createUser = async (req: CreateUser, res: Response) => {
  console.log(req.body);
  const { username, password } = req.body;

  const userRepo = DBUserRepository.getRepository();
  const hashService = HashService.getService();

  const hashedPassword = await hashService.hash(password);

  if (!hashedPassword) throw new AppError(500, "Error occured");
  const userData = { username, password: hashedPassword };

  const user = await userRepo.create(userData);
  if (!user) throw new AppError(400, "error occured");

  ApiTerminal.respondWithSuccess<IUser>(res, user, 201);
};

export const findByName = async (req: UserByUserName, res: Response) => {
  const username = req.body.username;
  const userRepo = DBUserRepository.getRepository();
  const user = await userRepo.findByUsername(username);
  if (!user) throw new AppError(400, "there is no user in this user name");

  ApiTerminal.respondWithSuccess<IUser>(res, user, 200);
};
