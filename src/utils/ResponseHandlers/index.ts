import { AppError } from "../../errors/AppError"
import { StatusCodeEnum } from "../../enums/statusCodes"

const { BAD_REQUEST, ACCESS_DENIED } = StatusCodeEnum

export const BadRequest = (message: string) => {
  throw new AppError(message, BAD_REQUEST)
}

export const AccessDenied = (message: string) => {
  throw new AppError(message, ACCESS_DENIED)
}

