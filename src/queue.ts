import { RegistrationEmailQueue } from "./Queue";
import { RegistrationMail } from "./Queue/jobs/RegistrationEmail";

RegistrationEmailQueue.process(RegistrationMail.handle)
