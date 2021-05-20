var rents = require('../models/datas/rentsData').rentsData;

const rentRepository = require('../persistency/rent-repository');

exports.getAllRents=()=> {
    return rentRepository.getAll();
}

exports.createRent=(newRent)=> {
    rents.push(newRent);
}

exports.deleteRentById=(id)=> {
    
    let rent = rents.find(r => r.movieId == id);
    if (rent) {
        const newRents = rents = rents.filter(r => r.movieId != id);
        rents = newRents;
        return rents; // new object array
    } else
    return rent; // undefined
}
