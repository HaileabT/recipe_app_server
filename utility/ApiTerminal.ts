import { AppError } from "../api/types/app/AppError";
import { AppErrorCodes } from "../api/types/app/ErrorResponseData";
import { ServerErrorResponse } from "../api/types/app/ServerErrorResponse";
import { ServerSuccessResponse } from "../api/types/app/ServerSuccessResponse";
import { Response } from "express";
export class ApiTerminal {
  static respondWithSuccess<T>(res: Response, data: T, statusCode: number) {
    const response: ServerSuccessResponse<T> = {
      status: "success",
      data: data,
    };
    res.status(statusCode).json(response);
  }

  static respondWithError(
    res: Response,
    status: "error" | "fail",
    error: AppError,
    statusCode: number,
    errorCode?: AppErrorCodes
  ) {
    const response: ServerErrorResponse = {
      status: status,
      error: {
        errorCode: errorCode ? errorCode : "INTERNAL_ERROR",
        message: error.message,
        errors: error.errors ? error.errors : undefined,
      },
    };
    res.status(statusCode).json(response);
  }
}
