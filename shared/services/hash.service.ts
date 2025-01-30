import bcrypt from "bcryptjs";
export class HashService {
  private static service: HashService | null = null;
  private static package = bcrypt;

  private constructor() {}

  public static getService() {
    if (!HashService.service) {
      HashService.service = new HashService();
    }

    return HashService.service;
  }

  public async hash(word: string) {
    let hashedWord: string | undefined = undefined;
    try {
      hashedWord = await HashService.package.hash(word, 10);
    } catch (err: any) {
      console.log(err);
      return;
    }

    return hashedWord;
  }

  public async compare(word: string, hashedWord: string): Promise<boolean> {
    let isTheSame: boolean = false;
    try {
      isTheSame = await HashService.package.compare(word, hashedWord);
    } catch (err: any) {
      console.log(err);
      return false;
    }

    return isTheSame;
  }
}
