import { jsonParser } from "../../Utils/JsonParser";
import { emailTemplateParser, mailer } from "../../Utils/Mail";
import EmailTemplate from '../EmailTemplates.json'
export const RegistrationMail = {
    key: 'RegistrationMail',
    handle: async function ({ data }) {
        const { user } = data;
        try {
            console.log('Queue Running...')
            await mailer.sendMail({
                from: 'Car Site <dwingate9090@gmail.com>',
                to: `${user.firstname} ${user.lastname} <${user.email}>`,
                subject: jsonParser(user, EmailTemplate.RegistrationMail.title),
                html: emailTemplateParser(user, EmailTemplate.RegistrationMail.template)
            })
            console.log('Queue Done...')
        } catch (error) {
            console.log(error)
        }

    }
}
