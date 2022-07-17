import { CarController } from "../../controllers/car.controller";
import { CarRepository } from "../../repositories/car.repository";
import { CarService } from "../../services/Car.Service";
export default (): CarController => {
  const carRepository = new CarRepository();
  const carService = new CarService(carRepository);
  const carController = new CarController(carService);
  return carController;
}

