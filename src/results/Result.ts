import { IActionResult } from "../interfaces/IActionResult";
import { INotificationResult } from "../interfaces/INotificationResult";
import { ErrorActionResult } from "./ErrorActionResult";
import { FailActionResult } from "./FailActionResult";
import { SuccessActionResult } from "./SuccessActionResult";

export default class Result {
  static Fail(notification?: INotificationResult | Array<INotificationResult>): IActionResult{
    return new FailActionResult(notification);
  }

  static Success(data?: any): IActionResult{
    return new SuccessActionResult(data);
  }

  static Error(error?: Error | Array<Error>): IActionResult{
    return new ErrorActionResult(error);
  }
}

export const fail = Result.Fail;
export const success = Result.Success;
export const error = Result.Error;
