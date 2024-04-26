export class apiError extends Error {
  constructor(
    statusCode: number,
    message: string,
    data: null,
    error: any,
    stack: any
  ) {
    super(message);
    statusCode = statusCode;
    message = message;
    data = data;
    error = error;
    if (stack) {
      stack = stack;
    }
    Error.captureStackTrace(this, this.constructor);
  }
}
