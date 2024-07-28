import repo from "../repositories/PreferenceRepo.js";
import BaseService from "./BaseService.js";

class PreferenceService extends BaseService {
    constructor(repo) {
        super(repo);
    } 
}
export default new PreferenceService(repo);



