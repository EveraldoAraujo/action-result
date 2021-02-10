import { INotificationResult } from "../interfaces/INotificationResult";
import { ActionResult } from "./ActionResult";

export class FailActionResult extends ActionResult {
  constructor(notification?: INotificationResult | Array<INotificationResult>){
    super(false);

    if(!notification) return;
    
    if(Array.isArray(notification))
      notification.forEach(n=> super.notify(n))
    else
      super.notify(notification)
  }
}