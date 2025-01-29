import { ErrorResponseData } from "./ErrorResponseData";

export interface ServerErrorResponse {
  status: "error" | "fail";
  error: ErrorResponseData;
}
