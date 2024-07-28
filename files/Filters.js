function byParams(params) {

    let query = { status: new RegExp('w', 'i') };
    let locationFilter =[];

    if (params) {
        if (params.status) {
            query.status = new RegExp(params.status, 'i');
            console.log(query.status)

        }

        if (params.preference) {
            query.preference = new RegExp(params.preference, 'i');
        }

        if (params.location) {
            locationFilter = [{'location': new RegExp(params.location, 'i') }]
            console.log(locationFilter)
        }
    }
    const pipeline = [{ '$match': query }]
    if (locationFilter.length > 0) {
        pipeline.push({ '$match': { '$or': locationFilter } });
    }
    pipeline.push({
        '$project': {
            'phone': 0,
            'volunteerId': 0
        }
    });
    return pipeline;
}

function byId(id) {
    const pipeline = [{ '$match': { '_id': Number(id) } }]
    return pipeline;
}

export { byParams, byId }