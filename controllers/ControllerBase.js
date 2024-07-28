import autoBind from "auto-bind";

class ControllerBase {
    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {
            const f = req.query;
            const response = await this.service.getAll(f);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }

    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.getById(id);
            if (!response || response.length === 0) {
                let error = new Error(`${this.type} does not exist.`)
                error.status = 404;
                throw error;
            }
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}

export default ControllerBase;