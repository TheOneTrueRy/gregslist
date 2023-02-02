import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { housesService } from "../Services/HousesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawHouses(){
  let template = ''
  appState.houses.forEach(house => template += house.HouseCard)
  setHTML('listings', template)
}

function _drawHouse(){
  setText('listingModalLabel', `${appState.house.address}`)
  setHTML('listing-modal-body', appState.house.HouseDetails)
}

export class HousesController {

  constructor() {
    this.show
    appState.on('houses', _drawHouses)
    appState.on('house', _drawHouse)
  }

  show(){
    setText('add-listing-button', '🏡Got a house?')
    setText('listingFormLabel', '🏡List it!')
    setHTML('the-actual-form', House.HouseForm())
    _drawHouses()
  }

  handleFormSubmit(){
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      housesService.createHouse(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }

  setActiveHouse(houseID) {
    try {
      housesService.setActiveHouse(houseID)
    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteHouse(houseID) {
    try {
      const yes = await Pop.confirm('Are you sure you want to erase this listing?')
      if (!yes) { return } // full stop

      housesService.deleteHouse(houseID)
    } catch (error) {
      Pop.error(error)
    }
  }
}
