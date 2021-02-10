import { INotificationResult } from "./INotificationResult";

export interface IActionResult {
  success: Readonly<boolean>;
  data?: Readonly<any>;
  notifications?: ReadonlyArray<INotificationResult>;
  errors?: Readonly<Array<Error>>;
  notify(notification: INotificationResult): void;
}
