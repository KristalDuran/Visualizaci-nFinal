
var continents = require('./../data/continents.json');
var countries = require('./../data/countries.json');
var states = require('./../data/states.json');
var cities = require('./../data/cities.json');

exports.getContinents = async (req) => {
    try {
        return continents;
    } catch (err) {
        return "Error al obtener los continentes";   
    }
}

exports.getContinent = async (req) => {
    try {
        let continent = null;
        continents.continents.forEach(element => {
            if (element.id === Number(req)) {
                continent = element;
            }
        });
        return continent;
    } catch (err) {
        return "Error al obtener el continente";   
    }
}

exports.getCountriesByContinentID = async (req) => {
    try {
        let countriesList = [];
        console.log(countries)
        countries.countries.forEach(element => {
            if (element.id_continent === Number(req)) {
                countriesList.push(element);
            }
        });
        return countriesList;
    } catch (err) {
        return "Error al obtener los paises";   
    }
}

exports.getCountyByID = async (req) => {
    try {
        let country = null;
        console.log(countries)
        countries.countries.forEach(element => {
            if (element.id === Number(req)) {
                country = element;
            }
        });
        return country;
    } catch (err) {
        return "Error al obtener el país";   
    }
}

exports.getStateByCountryID = async (req) => {
    try {
        let allStates = [];
        states.states.forEach(element => {
            if (element.id_country === Number(req)) {
                allStates.push(element);
            }
        });
        return allStates;
    } catch (err) {
        return "Error al obtener los estados";   
    }
}

exports.getStateByID = async (req) => {
    try {
        let state = null;
        states.states.forEach(element => {
            if (element.id === Number(req)) {
                state = element;
            }
        });
        return state;
    } catch (err) {
        return "Error al obtener los estados";   
    }
}

exports.getCitiesByStateID = async (req) => {
    try {
        let allCities = [];
        cities.cities.forEach(element => {
            if (element.id_state === Number(req)) {
                allCities.push(element);
            }
        });
        return allCities;
    } catch (err) {
        return "Error al obtener las ciudades";   
    }
}

exports.getCityByID = async (req) => {
    try {
        let city = null;
        cities.cities.forEach(element => {
            if (element.id === Number(req)) {
                city = element;
            }
        });
        return city;
    } catch (err) {
        return "Error al obtener la ciudad";   
    }
}