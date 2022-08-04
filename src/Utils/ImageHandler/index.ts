import { ImageRepository } from "../../Repositories/image.repository ";
import { ImageService } from "../../Services/image.service";
import axios from 'axios';
import { ImageDto } from "../../Dtos";

export const HandleImage = async (image, imageData: ImageDto, carImage?: boolean) => {
    try {
        const imageService = new ImageService(new ImageRepository());
        const imageBase64 = Buffer.from(image.data).toString('base64');

        const { data } = await axios.post(process.env.IMAGE_API_URL, { image: imageBase64, imageName: imageData.image_name },
            {
                headers: { "Content-Type": "multipart/form-data", IMAGE_API_KEY: process.env.IMAGE_API_KEY }
            })

        if (carImage) {
            await imageService.create({ ...imageData })
        }

        return data
    } catch (error) {
        console.log(error)
        return error.data
    }
}



