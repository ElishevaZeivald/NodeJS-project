import connect from './db.js';
import Location from '../models/Location.js';


class LocationRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll() {
        let l = await this.model.find({}).exec();
        console.log(l);
        return l;
    }

    async getById(id) {
        try {
            let location = await this.model.findById(id);
            return location;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error('Something wrong happened');
        }
    }

}
export default new LocationRepo(Location);