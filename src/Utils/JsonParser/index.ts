export const jsonParser = (variables: any, text: string) => {
    for (const prop in variables) {
        const regex = new RegExp(`{{${prop}}}`, 'g')
        text = text.replace(regex, variables[prop])
    }

    return text
}


