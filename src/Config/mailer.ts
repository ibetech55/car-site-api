import 'dotenv/config'
export const mailConfig = {
    service: process.env.MAILER_SERVICE,
    auth: {
        user: process.env.MAILER_USERNAME,
        pass: process.env.MAILER_PASSWORD
    }
}
