import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { AuthServiceImpl } from "../services/AuthServiceImpl";

export class AuthController {

  private service: AuthService;

  constructor() {
    this.service = new AuthServiceImpl();
  }

  async login(
    req: Request<any, any, { usuario: string; password: string }>,
    res: Response
  ): Promise<Response> {

    const { usuario, password } = req.body;

    if (!usuario || !password) {
      return res.status(400).json({ success: false });
    }

    const isValid = await this.service.login(usuario, password);

    return res.status(200).json({ success: isValid });
  }
}