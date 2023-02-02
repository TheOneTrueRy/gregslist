import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { jobsService } from "../Services/JobsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function _drawJobs(){
  let template = ''
  appState.jobs.forEach(j => template += j.JobCard)
  setHTML('listings', template)
}

function _drawJob(){

  setText('listingModalLabel', `${appState.job.business} - ${appState.job.position}`)
  setHTML('listing-modal-body', appState.job.JobDetails)

}
export class JobsController {

  constructor() {
    this.show
    appState.on('jobs', _drawJobs)
    appState.on('job', _drawJob)
  }

  setActiveJob(jobId){
    try {
      jobsService.setActiveJob(jobId)
    } catch (error) {
      Pop.error(error)
    }

  }

  handleFormSubmit(){
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      jobsService.createJob(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }


  show() {
    setText('add-listing-button', '👷 Need Workers?')
    setText('listingFormLabel', '👷 Post a Job Listing!')
    setHTML('the-actual-form', Job.JobForm())
    _drawJobs()
  }

  async deleteJob(jobId){
    try {
      const yes = Pop.confirm('Are you sure you want to erase this listing?')
      if(!yes){return} 
      jobsService.deleteJob(jobId)
    } catch (error) {
      Pop.error(error)
    }
  }
}
