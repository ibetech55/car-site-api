import { ImageRepository } from "../../Repositories/image.repository ";
import { ImageService } from "../../Services/image.service";
import axios from 'axios';

export const HandleImage = async (image, imageData: any, carImage?: boolean) => {

    const imageService = new ImageService(new ImageRepository());
    const imageBase64 = Buffer.from(image.data).toString('base64');

    const { data } = await axios.post(process.env.IMAGE_API_URL, { image: imageBase64, imageName: imageData.image_name },
        {
            headers: { "Content-Type": "multipart/form-data" }
        })

    if (carImage) {
        await imageService.create({ ...imageData })
    }

    return data
}

