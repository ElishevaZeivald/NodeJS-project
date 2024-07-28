import repo from "../repositories/VolunteerRepo.js";
import BaseService from "./BaseService.js";

class VolunteerService extends BaseService {
    constructor(repo) {
        super(repo);
    } 
    async insert(data){
        try{
            let volunteer = await this.repo.insert(data);
            return volunteer;
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to add volunteer.")
        }
    }

    
    async update(id, data){
        try{
            return await this.repo.update(id, data);
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to update request.");
        }
    }

}
export default new VolunteerService(repo);



