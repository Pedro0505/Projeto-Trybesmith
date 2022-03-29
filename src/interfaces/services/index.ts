interface ServiceReturnSuccess<U> {
  code: number;
  data: U,
}

interface ServiceReturnError {
  code: number;
  data: { message: string }
}

export { ServiceReturnError, ServiceReturnSuccess };
