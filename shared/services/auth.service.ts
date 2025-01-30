import jwt from "jsonwebtoken";
import { ENV } from "../env";
export class AuthService {
  private static service: AuthService | null = null;
  private static package = jwt;
  private static secretKeyFallback = "dummy recipe api auth secret key";

  private constructor() {}

  public static getService() {
    if (!AuthService.service) {
      AuthService.service = new AuthService();
    }

    return AuthService.service;
  }

  private verifyAsync<T = string>(token: string) {
    return new Promise<T>((resolve, reject) => {
      AuthService.package.verify(token, ENV.authSecret ?? AuthService.secretKeyFallback, function (err, decoded) {
        if (!err) {
          resolve(decoded as T);
        }

        reject(err);
      });
    });
  }

  private signAsync<T = string>(payload: T) {
    return new Promise<string>((resolve, reject) => {
      AuthService.package.sign(
        JSON.stringify(payload),
        ENV.authSecret ?? AuthService.secretKeyFallback,
        function (err, token) {
          if (!err) {
            resolve(token as string);
          }

          reject(err);
        }
      );
    });
  }

  public async authenticate<T = string>(token: string) {
    let payload: T | undefined;
    try {
      payload = await this.verifyAsync(token);
    } catch (err: any) {
      console.log(err);
      return;
    }

    return payload as T;
  }

  public async sign<T = string>(payload: T) {
    let token: string | undefined = undefined;
    try {
      token = await this.signAsync(JSON.stringify(payload));
    } catch (err: any) {
      console.log(err);
      return;
    }

    return token;
  }
}
