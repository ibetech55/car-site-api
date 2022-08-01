import nodemailer from 'nodemailer';
import { mailConfig } from '../../Config/mailer';

const mailer = nodemailer.createTransport(mailConfig)


const emailTemplateParser = (variables: any, template: string) => {
    if (template && variables) {
        for (const prop in variables) {
            const regex = new RegExp(`{{${prop}}}`, 'g')
            template = template.replace(regex, variables[prop])
        }
        return template
    }

}

export { mailer, emailTemplateParser }
