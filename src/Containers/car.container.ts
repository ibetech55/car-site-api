import { CarController } from "../Controllers/car.controller";
import { CarRepository } from "../Repositories/car.repository";
import { CarService } from "../Services/car.service";
export default (): CarController => {
  const carRepository = new CarRepository();
  const carService = new CarService(carRepository);
  const carController = new CarController(carService);
  return carController;
}

