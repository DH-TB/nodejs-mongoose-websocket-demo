let express = require('express');
let router = express.Router();
let Socket = require('../app');

router.post('/register', (req, res, next)=> {
    let socket = new Socket(req.body);
    socket.save((err, doc)=> {
        if (err) {
            return next(err);
        }
        res.send(doc);
    })
});

module.exports = router;