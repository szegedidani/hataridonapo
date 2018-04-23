const User = require('../models/userModel');


const register = (req, res) => {
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
            res.send('Ez a felhasználó már létezik')
        } else {
            User.create(req.body, (err, post) => {
                if (err) {
                    res.send(err)
                }
                res.json(post)
            })
        }
    })
};

const login = (req, res) => {
    let found = false
    User.find({}, (err, post) => {
        if (err) {
            res.send(err)
        }
        for (let i in post) {
            if (post[i].userEmail === req.body.userEmail) {
                if (post[i].password === req.body.password) {
                    res.send({
                        loggedin: true,
                        userId: post[i].id
                    })
                    found = true;
                    break;
                }
            }
        }
        if (found == false) {
            res.send({
                loggedin: false
            })
        }
    })
}

module.exports = {

    list: (req, res) => {
        User.find({}, (err, post) => {
            if (err) {
                res.send(err)
            }
            res.json(post);
        })
    },


    searchUser: (req, res) => {
        if (req.body.userName) {
            register(req, res);
        } else {
            login(req, res);
        }
    },

    find: (req, res, id) => {
        User.findById(id, (err, post) => {
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