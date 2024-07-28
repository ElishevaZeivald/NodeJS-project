import repo from "../repositories/LocationRepo.js";
import BaseService from "./BaseService.js";

class LocationService extends BaseService {
    constructor(repo) {
        super(repo);
    } 
}
export default new LocationService(repo);



