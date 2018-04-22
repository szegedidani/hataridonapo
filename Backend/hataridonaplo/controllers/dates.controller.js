const Dates = require('../models/datesModel')

module.exports = {
    list: (req, res) => {
        Dates.find({}, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post);
        })
    },

    find: (req, res) => {
        Dates.findById(req.params.id, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
    },

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