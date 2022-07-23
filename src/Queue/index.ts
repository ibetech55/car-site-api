import 'dotenv/config'
import Queue from 'bull';
import { redisConfig } from '../Config/redis';
import { RegistrationMail } from './jobs/RegistrationEmail';

console.log('Connected to Queue')
const RegistrationEmailQueue = new Queue(RegistrationMail.key, redisConfig)

export { RegistrationEmailQueue }
