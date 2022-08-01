export const RandomCode = (size?: number): string => {
    return Math.random().toString().slice(size ? size : 5, 11);
}
