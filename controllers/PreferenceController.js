import ControllerBase from "./ControllerBase.js";
import service from "../services/PreferenceService.js"

class PreferenceController extends ControllerBase {
    constructor(service) {
        super(service);  
        this.type = "prefernce";      
    }
}
export default new PreferenceController(service);

