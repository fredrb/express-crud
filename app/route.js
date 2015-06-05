var router = require('express').Router();

var user = require('./lib/user/user.js');

// user api routing
router.route('/api/user')
    .get(user.all)
    .post(user.add);

router.route('/api/user/s/:query')
    .get(user.search);

router.route('/api/user/d/:query')
    .get(user.delete);

router.route('/api/user/u/:query')
    .post(user.update);

// interface routing
router.get('/', function(req, res){
    res.render('index', {
        title : "Home Page!"
    });
});

router.get('/user', function(req, res){
    res.render('view/user', {
        title : 'user management'
    });
})

module.exports = router;
