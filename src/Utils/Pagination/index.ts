export interface IPagination {
  skip?: number,
  limit?: number,
  orderBy?: string,
  orderType?: string,
  page?: number
}

export const pagination = (Params: IPagination): IPagination => {
  return {
    skip: Params.limit * (Params.page - 1),
    limit: Params.limit,
    orderBy: Params.orderBy,
    orderType: Params.orderType
  }
}
