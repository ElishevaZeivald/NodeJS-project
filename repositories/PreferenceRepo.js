import connect from './db.js';
import Preference from '../models/Preference.js';


class PreferenceRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll() {
        let p = await this.model.find({}).exec();
        console.log(p);
        return p;
    }

    async getById(id) {
        try {
            let p = await this.model.findById(id);
            return p;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error('Something wrong happened');
        }
    }

}
export default new PreferenceRepo(Preference);