import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { Pop } from "../Utils/Pop.js"
import { saveState } from "../Utils/Store.js"

class JobsService {
  deleteJob(jobId) {
    let jobIndex = appState.jobs.findIndex(j => j.Id == jobId)
    if(jobIndex == -1){
      throw new Error("That's a bad Job ID, man!")
    }
    appState.jobs.splice(jobIndex, 1)
    saveState('jobs', appState.jobs)
    appState.emit('jobs')
  }
  createJob(formData) {
    let job = new Job(formData)
    appState.jobs.push(job)
    appState.emit('jobs')
  }
  setActiveJob(jobId) {
    const job = appState.jobs.find(j => j.Id == jobId)
    if(!job){
      throw new Error('There is no job with that ID!')
    }
    appState.job = job
  } 

}
export const jobsService = new JobsService()