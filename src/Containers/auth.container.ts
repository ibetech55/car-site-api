import { AuthController } from "../Controllers/auth.controller";
import { AuthRepository } from "../Repositories/auth.repsoitory";
import { UserRepository } from "../Repositories/user.repository";
import { AuthService } from "../Services/auth.service";
import { Hashpassword } from "../Utils/HashPassword";

export const AuthContainer = (): AuthController => {
    const hashPassword = new Hashpassword()
    const authRepository = new AuthRepository();
    const userRepository = new UserRepository();
    const authService = new AuthService(authRepository, userRepository, hashPassword);
    const authController = new AuthController(authService);
    return authController;
}

