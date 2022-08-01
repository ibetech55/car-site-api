import { BrandController } from "../Controllers/brand.controller";
import { BrandRepository } from "../Repositories/brand.repository";
import { BrandService } from "../Services/brand.service";
export default (): BrandController => {
    const brandRepository = new BrandRepository();
    const brandService = new BrandService(brandRepository);
    const brandController = new BrandController(brandService);
    return brandController;
}

