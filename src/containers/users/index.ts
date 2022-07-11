import { UserController } from "../../controllers/user.controller"
import { UserRepository } from "../../repositories/user.repository";
import { UserService } from "../../services/User.Service";
export default (): UserController => {
  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const userController = new UserController(userService);
  const UserContainer = userController;
  return UserContainer;
}
