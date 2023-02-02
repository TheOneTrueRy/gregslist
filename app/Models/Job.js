import { generateId } from "../Utils/generateId.js"


export class Job { 

  constructor(data){
    this.position = data.position
    this.business = data.business
    this.experience = data.experience
    this.img = data.img
    this.description = data.description
    this.Id = data.Id || generateId()
  }

  get JobCard(){
    return /*html*/ `
    <div class="card elevation-2" onclick="app.carsController.setActiveJob('${this.Id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
    <div class="col-md-4 my-3">
      <img src="${this.img}" alt="${this.position}" class="rounded">
      <p><b>${this.business} - ${this.position}</b></p>
    </div>
  </div>
    `
  }

  get JobDetails(){
    return /*html*/ `
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center flex-column align-items-center px-5">
        <img src="${this.img}" alt="">
        <p class="fs-3">${this.position} at ${this.business}</p>
        <p class="fs-4">${this.experience} years of experience required.</p>
        <p>${this.description}</p>
      </div>
      <div class="col-12 py-3">
        <button class="btn btn-danger" data-bs-dismiss="modal" onclick="app.jobsController.deleteJob('${this.Id}')">Erase Listing</button>
      </div>
    </div>
  </div>
    `
  }

  static JobForm(){
    return /*html*/ `
    <form onsubmit="app.jobsController.handleFormSubmit()">

    <div class="mb-3">
    <label for="business">Business</label>
    <input type="text" required name="business" class="form-control">
    </div>

    <div class="mb-3">
    <label for="position">Position</label>
    <input type="text" required name="position" class="form-control">
    </div>

    <div class="mb-3">
    <label for="experience">Years of Experience Req.</label>
    <input type="number" required name="experience" class="form-control">
    </div>

    <div class="mb-3">
    <label for="img">Listing Img URL</label>
    <input type="url" required name="img" class="form-control">
    </div>

    <div>
    <label for="description">Description</label>
    <textarea class="form-control" placeholder="Additional Describing Details"></textarea>
    </div>

    <div class="d-flex my-4 justify-content-between align-items-center">
    <button class="btn" type="reset">Cancel</button>
    <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
    </div>

    </form>
    `
  }

}
