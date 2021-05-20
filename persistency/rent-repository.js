
const db= require('../models'); // no need to assert models/index.js

exports.getAll = async () => {
    return await db.Rents.findAll();
}