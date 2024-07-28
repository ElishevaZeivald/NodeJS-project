import ControllerBase from "./ControllerBase.js";
import service from "../services/LocationService.js"

class LocationController extends ControllerBase {
    constructor(service) {
        super(service);  
        this.type = "location";      
    }
}
export default new LocationController(service);

