const User = require('../models/userModel')

module.exports = {
    //getAll()
    list: (req, res) => {
        User.find({}, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post);
        })
    },

    find: (req, res) => {
        User.findById(req.params.id, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
    },

    create: (req, res) => {
        User.create(req.body, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
    },

    update: (req, res) => {
        req.body.updatedAt = new Date().toLocaleString();
        User.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
    },

    remove: (req, res) => {
        User.findByIdAndRemove(req.params.id, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post)
        })
    },

    addUser: (req, res) => {
        let found = false;
        User.find({}, (err, post) => {
            if (err) {
                res.send(err)
            }
            for (let k in post) {
                if (post[k].userEmail === req.body.userEmail) {
                    found = true;
                    break;
                } else {
                    if (post[k].userName === req.body.userName) {
                        let found = true;
                        break;
                    };
                }
            };
            if (found == true) {
                res.send(req.body.userName)
            } else {
                User.create(req.body, (err, post) => {
                    if (err) {
                        res.send(err)
                    }
                    res.json(post)
                })
            }
        })
    },

}