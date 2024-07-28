import repo from '../repositories/RequestRepo.js';
import BaseService from './BaseService.js';

class RequestService extends BaseService{
    constructor(repo){
        super(repo);
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
    ///////
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
}
export default new RequestService(repo);