import connect from './db.js';
import Status from '../models/Status.js';


class StatusRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll() {
        let s = await this.model.find({}).exec();
        console.log(s);
        return s;
    }

    async getById(id) {
        try {
            let status = await this.model.findById(id);
            return status;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error('Something wrong happened');
        }
    }

}
export default new StatusRepo(Status);