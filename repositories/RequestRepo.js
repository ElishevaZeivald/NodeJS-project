import connect from './db.js';
import Request from '../models/Request.js';
import buildPipeline from '../files/Pipline.js';
import { byParams, byId } from '../files/Filters.js';

class RequestRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    // async getAll(params) {
    //     const sPipe = byParams(params);
    //     const pipeline = buildPipeline(sPipe);
    //     let requests = await this.model.aggregate(pipeline).exec();
    //     return requests;
    // }
    async getAll() {
        let v = await this.model.find({}).exec();
        console.log(v);
        return v;
    }

    // async getById(id) {
    //     try {
    //         const sPipe = byId(id);
    //         const pipline = buildPipeline(sPipe);
    //         let req = await this.model.aggregate(pipline).exec();
    //         return req;
    //     }
    //     catch (errors) {
    //         console.log(errors.message);
    //         throw new Error('An error occurred while retrieving the request. Please try again later');
    //     }
    // }
    async getById(id) {
        try {
            let volunteer = await this.model.findById(id);
            return volunteer;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error('Something wrong happened');
        }
    }

    async update(id, data) {
        try {
            let req = await this.model.findByIdAndUpdate(id, data, { new: true });
            return req;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error("An error occurred while trying to update the request's status. Please try again later.");
        }
    }
    //////
    async insert(data) {
        try {
            let volunteer = await this.model.create(data);
            return volunteer;
        }
        catch (error) {
            console.log(error.message);
            throw error;
        }
    }

}
export default new RequestRepo(Request);