import { ActionResult } from "./ActionResult";

export class SuccessActionResult extends ActionResult {
  constructor(data?: any){
    super(true, data);
  }
}