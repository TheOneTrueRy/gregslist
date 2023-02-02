

export class House {
  constructor(data) {
      this.Id = data.Id || data.generateId()
      this.year = data.year
      this.address = data.address
      this.bedrooms = data.bedrooms
      this.bathrooms = data.bathrooms
      this.sqft = data.sqft
      this.price = data.price
      this.description = data.description
      this.img = data.img
  }

  get HouseCard(){
    return /*html*/ `
    <div class="card elevation-2" onclick="app.housesController.setActiveJob('${this.Id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
    <div class="col-md-4 my-3">
      <img src="${this.img}" alt="${this.address}" class="rounded">
      <p><b>${this.address} - $${this.price}</b></p>
    </div>
  </div>
    `
  }

  get HouseDetails(){
    return /*html*/ `
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex justify-content-center flex-column align-items-center px-5">
        <img src="${this.img}" alt="">
        <p class="fs-3">${this.address}</p>
        <p class="fs-4">${this.price}</p>
        <p class="fs-5">Built in ${this.year}</p>
        <p class="fs-5">Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms} - ${this.sqft} sqft</p>
        <p>${this.description}</p>
      </div>
      <div class="col-12 py-3">
        <button class="btn btn-danger" data-bs-dismiss="modal" onclick="app.housesController.deleteHouse('${this.Id}')">Erase Listing</button>
      </div>
    </div>
  </div>
    `
  }

  static HouseForm(){
    return /*html*/ `
    <form onsubmit="app.housesController.handleFormSubmit()">

    <div class="mb-3">
    <label for="address">Address</label>
    <input type="text" required name="address" class="form-control">
    </div>

    <div class="mb-3">
    <label for="year">Year Built/Renovated</label>
    <input type="number" required name="year" class="form-control">
    </div>

    <div class="mb-3">
    <label for="bedrooms">Number of Bedrooms</label>
    <input type="number" required name="bedrooms" class="form-control">
    </div>

    <div class="mb-3">
    <label for="bathrooms">Number of Bathrooms</label>
    <input type="number" required name="bathrooms" class="form-control">
    </div>

    <div class="mb-3">
    <label for="sqft">How many sqft?</label>
    <input type="number" required name="sqft" class="form-control">
    </div>

    <div class="mb-3">
    <label for="price">Price</label>
    <input type="number" required name="price" class="form-control">
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