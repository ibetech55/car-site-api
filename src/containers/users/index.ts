import { UserController } from "../../controllers/user.controller"
import { UserService } from "../../services/User.Service";
export default (): UserController => {

    const userService = new UserService();
    const userController = new UserController(userService);
    const UserContainer = userController;
    return UserContainer;
}