import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"

class HousesService {
  createHouse(formData) {
    let house = new House(formData)
    appState.houses.push(house)
    appState.emit('houses')
    saveState('houses', appState.houses)
  } 


  setActiveHouse(houseID){
    const house = appState.houses.find(h => h.Id == houseID)
    if(!house){
      throw new Error('No house with that ID, sorry!')
    }
    appState.house = house
  }

  deleteHouse(houseID){
    let houseIndex = appState.houses.findIndex(h => h.Id == houseID)
    if(houseIndex == -1){
      throw new Error('No house with that ID!')
    }
    appState.houses.splice(houseIndex, 1)
    saveState('houses', appState.houses)
    appState.emit('houses')
  }
}


export const housesService = new HousesService()