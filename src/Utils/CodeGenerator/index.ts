import path from "path";

export const RandomCode = (size?: number): string => {
    return Math.random().toString().slice(size ? size : 5, 11);
}

export const GenerateRandomString = (length: number) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return `${result}${Date.now().toString()}`;
}

export const GenerateImageName = (imageName: string, length?: number) => {
    return `${GenerateRandomString(length ? length : 40)}${Date.now()}${path.extname(imageName)}`
}
