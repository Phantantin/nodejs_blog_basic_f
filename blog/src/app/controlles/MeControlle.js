const Course = require('../models/Course');

const { text } = require('express');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // get    /me/stored/courses
    storedCourses(req, res, next) {

        
        

        

        Promise.all([Course.find({}).sortable(req), Course.countDocuments()])
            .then(([courses, deletedCount]) =>
                res.render('me/storedCourses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);

        // Course.countDocumentsDeleted()
        //     .then((deletedCount) =>{
        //         console.log(deletedCount)
        //     })
        //     .catch(() =>{});

        // Course.find({})
        //     .then((courses) =>
        //         res.render('me/storedCourses', {
        //             courses: mutipleMongooseToObject(courses),
        //         }),
        //     )
        //     .catch(next);
    }

    // get    /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((courses) =>
                res.render('me/trashCourses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
