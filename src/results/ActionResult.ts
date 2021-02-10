import { IActionResult } from "../interfaces/IActionResult";
import { INotificationResult } from "../interfaces/INotificationResult";

export class ActionResult implements IActionResult{

  constructor( 
    public readonly success: boolean, 
    public readonly data?: any,
    public readonly errors?: Array<Error>,
    public readonly notifications: Array<INotificationResult> = [], 
    ) {}

  public notify(notification: INotificationResult): void {
    this.notifications.push(notification);
  }
}