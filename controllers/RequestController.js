import ControllerBase from './ControllerBase.js';
import service from '../services/RequestService.js';

class RequestController extends ControllerBase{
    constructor(service){
        super(service);
        this.type = "help request";
    }

    
async insert(req, res, next) {
    try {
        const response = await this.service.insert(req.body);
        return res.status(200).json(response);
    }
    catch (e) {
        next(e);
    }
}
/////
    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
    /////
}

export default new RequestController(service);
