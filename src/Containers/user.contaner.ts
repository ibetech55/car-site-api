import { UserController } from "../Controllers/user.controller"
import { UserRepository } from "../Repositories/user.repository";
import { UserService } from "../Services/user.Service";
import { Hashpassword } from "../Utils/HashPassword";
export default (): UserController => {
  const hashPassword = new Hashpassword();
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository, hashPassword);
  const userController = new UserController(userService);
  const UserContainer = userController;
  return UserContainer;
}
