import ControllerBase from "./ControllerBase.js";
import service from "../services/StatusService.js"

class StatusController extends ControllerBase {
    constructor(service) {
        super(service);  
        this.type = "status";      
    }
}
export default new StatusController(service);

