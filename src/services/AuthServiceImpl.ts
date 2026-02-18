import { AuthService } from "./AuthService";
import { UsuarioRepository } from "../repositories/UsuarioRepository";

export class AuthServiceImpl implements AuthService {

  private repository = new UsuarioRepository();

  async login(usuario: string, password: string): Promise<boolean> {
    const user = await this.repository.findByUsuarioAndPassword(usuario, password);
    return !!user;
  }

}