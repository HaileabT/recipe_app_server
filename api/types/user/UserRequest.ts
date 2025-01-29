import { Request } from "express";
export interface UserByIdRequest extends Request {
  params: {
    id: string;
  };
}

export interface CreateUser extends Request {
  body: {
    username: string;
    password: string;
  };
}

export interface UserByUserName extends Request {
  body: {
    username: string;
  };
}
