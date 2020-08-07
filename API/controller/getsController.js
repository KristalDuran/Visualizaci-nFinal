var express = require('express');
var router = express.Router();
var eventManager = require('../manager/getsManager');

router.get('/getContinets', function(req, res, next) {
    try {
        eventManager.getContinents().then(
            (data) => {
                let response = {
                    content: data.continents,
                    success: data.output,
                    code: 200
                };
                res.send(JSON.stringify(response));
            }
        );
    }
    catch (err) {
        let response = {
            content: err,
            code: 500
        };
        res.send(JSON.stringify(response));
    }
});

router.get('/getContinetByID', function(req, res, next) {
    try {
        console.log(req.query)
        eventManager.getContinent(req.query.id).then(
            (data) => {
                let response = {
                    content: data,
                    code: 200
                };
                res.send(JSON.stringify(response));
            }
        );
    }
    catch (err) {
        let response = {
            content: err,
            code: 500
        };
        res.send(JSON.stringify(response));
    }
});

router.get('/getCountriesByContinentID', function(req, res, next) {
    try {
        console.log(req.query)
        eventManager.getCountriesByContinentID(req.query.id).then(
            (data) => {
                let response = {
                    content: data,
                    code: 200
                };
                res.send(JSON.stringify(response));
            }
        );
    }
    catch (err) {
        let response = {
            content: err,
            code: 500
        };
        res.send(JSON.stringify(response));
    }
});

router.get('/getCountryByID', function(req, res, next) {
    try {
        console.log(req.query)
        eventManager.getCountryByID(req.query.id).then(
            (data) => {
                let response = {
                    content: data,
                    code: 200
                };
                res.send(JSON.stringify(response));
            }
        );
    }
    catch (err) {
        let response = {
            content: err,
            code: 500
        };
        res.send(JSON.stringify(response));
    }
});

router.get('/getStateByCountryID', function(req, res, next) {
    try {
        console.log(req.query)
        eventManager.getStateByCountryID(req.query.id).then(
            (data) => {
                let response = {
                    content: data,
                    code: 200
                };
                res.send(JSON.stringify(response));
            }
        );
    }
    catch (err) {
        let response = {
            content: err,
            code: 500
        };
        res.send(JSON.stringify(response));
    }
});

router.get('/getStateByID', function(req, res, next) {
    try {
        console.log(req.query)
        eventManager.getStateByID(req.query.id).then(
            (data) => {
                let response = {
                    content: data,
                    code: 200
                };
                res.send(JSON.stringify(response));
            }
        );
    }
    catch (err) {
        let response = {
            content: err,
            code: 500
        };
        res.send(JSON.stringify(response));
    }
});

router.get('/getCitiesByStateID', function(req, res, next) {
    try {
        console.log(req.query)
        eventManager.getCitiesByStateID(req.query.id).then(
            (data) => {
                let response = {
                    content: data,
                    code: 200
                };
                res.send(JSON.stringify(response));
            }
        );
    }
    catch (err) {
        let response = {
            content: err,
            code: 500
        };
        res.send(JSON.stringify(response));
    }
});

router.get('/getCityByID', function(req, res, next) {
    try {
        console.log(req.query)
        eventManager.getCityByID(req.query.id).then(
            (data) => {
                let response = {
                    content: data,
                    code: 200
                };
                res.send(JSON.stringify(response));
            }
        );
    }
    catch (err) {
        let response = {
            content: err,
            code: 500
        };
        res.send(JSON.stringify(response));
    }
});

module.exports = router;