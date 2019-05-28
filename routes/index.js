var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var passport = require('passport');
const sgMail = require('@sendgrid/mail');

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'fad44f94',
  apiSecret: 'rvFDSz6lQXZh7Os0'
})

var SENDGRID_APY_KEY = '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';
sgMail.setApiKey(SENDGRID_APY_KEY);
//sgMail.setApiKey('IdeaTek');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//sets variables for mongoose schema
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

// gets posts from database
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }
    res.json(posts);
  });
});

// create a new post
router.post('/posts', auth, function(req, res, next) {
  console.log("inside server side post method");
  var post = new Post(req.body);
  post.author = req.payload.username;
  console.log(post.author);
  post.save(function(err, post){
    if(err){ return next(err); }//continue next req
    res.json(post);
  });
});

// Preload post objects on routes with ':post'
router.param('post', function(req, res, next, id) {
  var query = Post.findById(id);
  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error("can't find post")); }
    req.post = post;
    return next();
  });
});

// Preload comment objects on routes with ':comment'
router.param('comment', function(req, res, next, id) {
  var query = Comment.findById(id);
  query.exec(function (err, comment){
    if (err) { return next(err); }
    if (!comment) { return next(new Error("can't find comment")); }
    req.comment = comment;
    return next();
  });
});

// return a post
router.get('/posts/:post', function(req, res, next) {
  req.post.populate('comments', function(err, post) {
    res.json(post);
  });
});

// delete a post
router.delete('/posts/:post', function(req, res, next) {
    req.post.remove(function(err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
});

// upvote a post
router.put('/posts/:post/upvote', auth, function(req, res, next) {
  req.post.upvote(function(err, post){
    if (err) { return next(err); }
    res.json(post);
  });
});

// downvote a post
router.put('/posts/:post/downvote', auth, function(req, res, next) {
  req.post.downvote(function(err, post){
    if (err) { return next(err); }
    res.json(post);
  });
});

// create a new comment
router.post('/posts/:post/comments', auth, function(req, res, next) {
  var comment = new Comment(req.body);
  comment.post = req.post;
  comment.author = req.payload.username;
  comment.save(function(err, comment){
    if(err){ return next(err); }
    req.post.comments.push(comment);
    req.post.save(function(err, post) {
      if(err){ return next(err); }
      res.json(comment);
    });
  });
});

// delete a comment
router.delete('/posts/:post/comments/:comment', auth, function(req, res, next) {
    req.comment.remove(function(err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
});

// upvote a comment
router.put('/posts/:post/comments/:comment/upvoteComment', auth, function(req, res, next) {
  req.comment.upvoteComment(function(err, comment){
    if (err) { return next(err); }

    res.json(comment);
  });
});

// downvote a comment
router.put('/posts/:post/comments/:comment/downvoteComment', auth, function(req, res, next) {
  req.comment.downvoteComment(function(err, comment){
    if (err) { return next(err); }

    res.json(comment);
  });
});

// login to the site
router.post('/login', function(req, res, next){
  console.log('inside login method');
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err); }
    if(user){
      return res.json({token: user.generateJWT()});
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

// register for the site
router.post('/register', function(req, res, next){
  console.log("Inside register functionnn");
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body.email);
  console.log(req.body.phone);
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields'});
  }
  var user = new User();
  user.email = req.body.email;
  user.username = req.body.username;
  user.phone = req.body.phone;
  user.setPassword(req.body.password)
  user.save(function (err){
    if(err){ return next(err); }
    else{

console.log("inside elseeeeeeee block");
      const msg = {
        from: 'mehare.namrata@gmail.com',
        to: user.email,
        subject: 'Welcome to IdeaTek',
        text: 'Hello ' + user.username,
        html: '<b>You are successfully registered to IdeaTek</b>'
      };
      sgMail.send(msg);


      const from = 'IdeaTek'
const to = user.phone;
console.log(user.phone);
const text = 'Hello from IdeaTek. You are successfully registered.'

nexmo.message.sendSms(from, to, text)

    
      
      // client.sendMail(email, function(err, info){
      //   console.log("inside Send Mail method");
      //     if (err ){
      //       console.log(error);
      //     }
      //     else {
      //       console.log('Message sent: ' + info.response);
      //     }
      //});
      

    }
    return res.json({token: user.generateJWT()})
  });
});

module.exports = router;
