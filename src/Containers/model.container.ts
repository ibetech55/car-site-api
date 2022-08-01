import { ModelController } from "../Controllers/model.controller";
import { ModelRepository } from "../Repositories/model.repository";
import { ModelService } from "../Services/model.service";
export default (): ModelController => {
    const modelRepository = new ModelRepository();
    const modelService = new ModelService(modelRepository);
    const modelController = new ModelController(modelService);
    return modelController;
}

