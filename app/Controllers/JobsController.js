import { setHTML, setText } from "../Utils/Writer.js"


function _drawJobs(){

}

function _drawJob(){

}
export class JobsController {

  constructor() {
    this.show
    
  }


  show() {
    
    setText('add-listing-button', '🪦 Dead end Job?')
    setText('listingFormLabel', '🪦 Dig up a new Job')
    setHTML('listings', 'YOUR JOB STARTS HERE....')
    setHTML('the-actual-form', 'Do your job lazy students')
    _drawJobs()
  }
}
