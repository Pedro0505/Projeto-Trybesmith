interface IServiceReturnSuccess<U> {
  code: number;
  data: U,
}

interface IServiceReturnError {
  code: number;
  data: { error: string }
}

export { IServiceReturnSuccess, IServiceReturnError };
