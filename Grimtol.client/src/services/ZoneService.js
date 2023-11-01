import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";

class ZoneService {

  runCommand(userInput) {
    logger.log('runCommand in service start')
    // debugger;
    const input = userInput.input.split(' ')
    if (input[0].toLowerCase().includes("examine")) {
      const result = AppState.activeZone.events.find(e => e.toLowerCase() == input[1].toLowerCase())
      if (result == null) {
        return "I don't know what you are trying to examine."
      }
      const output = AppState.events.find(e => e.name.toLowerCase() == input[1].toLowerCase())
      return output
    }
    else if (input[0].toLowerCase().includes("enter")) {
      const result = AppState.activeZone.events.find(e => e.toLowerCase() == input[1].toLowerCase())
      if (result == null) {
        return "I don't know where that is"
      }
      AppState.activeZone = AppState.zones.find(z => z.name.toLowerCase() == input[1].toLowerCase())
      const output = AppState.activeZone;
      return output
    }
  }

}




export const zoneService = new ZoneService;