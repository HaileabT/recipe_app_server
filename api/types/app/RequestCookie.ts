import { Request } from "express";
import { IUser } from "../../../domain/entities/IUser";

export interface RequestCookie extends Request {
  cookies: {
    "auth-token": string;
  };
}

export interface AuthenticeUserAttachedRequest extends RequestCookie {
  params: {
    id?: string;
  };
  user?: IUser;
}
