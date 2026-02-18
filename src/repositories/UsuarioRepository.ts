import { Usuario } from "../models/Usuario";

export class UsuarioRepository {

  async findByUsuarioAndPassword(usuario: string, password: string) {
    return Usuario.findOne({
      where: { usuario, password },
    });
  }

}