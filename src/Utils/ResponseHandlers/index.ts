import { AppError } from "../../ErrorHandler/AppError"
import { StatusCodeEnum } from "../../Enums/statusCodes"

const { BAD_REQUEST, ACCESS_DENIED, NOT_FOUND } = StatusCodeEnum

export const BadRequest = (message: string) => {
  throw new AppError(message, BAD_REQUEST)
}

export const AccessDenied = (message: string) => {
  throw new AppError(message, ACCESS_DENIED)
}

export const NotFound = (message: string) => {
  throw new AppError(message, NOT_FOUND)
}

