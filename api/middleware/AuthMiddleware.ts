import { NextFunction, Request, Response } from "express";
import { AppError } from "../types/app/AppError";
import { AuthService } from "../../shared/services/auth.service";
import { DBUserRepository } from "../../database/repositories/DBUserRepository";
import {
  AuthenticeUserAttachedRequest,
  RequestCookie,
} from "../types/app/RequestCookie";

export class AuthMiddleware {
  private static authMiddleware: AuthMiddleware | null = null;

  public static getRepository() {
    if (!AuthMiddleware.authMiddleware) {
      AuthMiddleware.authMiddleware = new AuthMiddleware();
    }
    return AuthMiddleware.authMiddleware;
  }

  async ProtectUnkownUser(
    req: RequestCookie & AuthenticeUserAttachedRequest,
    res: Response,
    next: NextFunction
  ) {
    if (!req.cookies["auth-token"])
      throw new AppError(404, "You are not loged in");

    const token = req.cookies["auth-token"];
    const authService = AuthService.getService();
    const id = await authService.authenticate(token);
    if (!id) throw new Error("Error occured");

    const userRepo = DBUserRepository.getRepository();
    const user = await userRepo.findById(id);
    if (!user) throw new AppError(404, "There is no user in this Id");

    req.user = user;

    next();
    return;
  }
}
