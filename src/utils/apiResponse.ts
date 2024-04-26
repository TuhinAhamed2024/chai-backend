export class apiResponse {
  constructor(
    statusCode:number,
    message:string = "success",
    data:any,
    success:boolean,
  ) {
    statusCode = statusCode,
    message = message,
    data = data,
    success = statusCode === 200
  }
}