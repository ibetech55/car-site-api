import { UserController } from "../../controllers/user.controller"
import { UserRepository } from "../../repositories/user.repository";
import { UserService } from "../../services/User.Service";
import { Hashpassword } from "../../utils/HashPassword";
export default (): UserController => {
  const hashPassword = new Hashpassword();
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository, hashPassword);
  const userController = new UserController(userService);
  const UserContainer = userController;
  return UserContainer;
}
