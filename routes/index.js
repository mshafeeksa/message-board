var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Admin",
     added: new Date()
   },
   {
     text: "Let it flow",
     user: "Admin again",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Enter new message' });
});

router.post('/new', function (req, res, next) {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date
  });
  res.redirect('/');
});

module.exports = router;
