import { ActionResult } from "./ActionResult";

export class ErrorActionResult extends ActionResult {
  constructor(error?: Error | Array<Error>){
    super(false);

    if(!error) return;
    
    if(Array.isArray(error))
      error.forEach(e=> super.errors.push(e))
    else
    super.errors.push(error)
  }
}