const Dates = require('../models/datesModel')

const list = (req, res) => {
    Dates.find({}, (err, post) => {
        if (err) {
            res.send(err)
        }
        res.json(post);
    })
};


module.exports = {

    list: (req, res) => {
        list(req, res)
    },

    find: (req, res) => {
        Dates.find({}, (err, post) => {
            if (err) {
                res.send(err)
            }
            let usersDates = post.filter(date => date.userId == req.params.userId)
            res.send(usersDates)
        })
    },
    /*Dates.findById(req.params.id, (err, post) => {
        if (err) {
            res.send(err)
        }*/




    create: (req, res) => {
        Dates.create(req.body, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
    },

    update: (req, res) => {
        req.body.updatedAt = new Date().toLocaleString();
        Dates.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
    },

    remove: (req, res) => {
        Dates.findByIdAndRemove(req.params.id, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
    }
}