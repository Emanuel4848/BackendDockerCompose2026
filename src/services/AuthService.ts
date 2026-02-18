export interface AuthService {
  login(usuario: string, password: string): Promise<boolean>;
}