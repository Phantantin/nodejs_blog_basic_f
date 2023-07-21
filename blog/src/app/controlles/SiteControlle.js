const Course = require('../models/Course');

const { text } = require('express');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // get /
    // async index(req, res) {
    //     try {
    //         const data = await Course.find({});
    //         res.json(data);
    //     }  catch (err) {
    //         res.status(400).json({error: err});

    //     }
    // }

    index(req, res, next) {
        // res.render('home')

        Course.find({})
            .then((courses) => {
                // courses = courses.map(course => course.toObject())
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // get / search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
