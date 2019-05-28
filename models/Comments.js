var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: String,
  createdOn: { type: Date, default: Date.now },
  votes: {type: Number, default: 0},
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

// saves upvote to database
CommentSchema.methods.upvoteComment = function(cb) {
  this.votes += 1;
  this.save(cb);
};

//saves downvote to database
CommentSchema.methods.downvoteComment = function(cb) {
  this.votes -= 1;
  this.save(cb);
};
//put this schema obj inside mongoose
//if we save record using this schema it will be save in collection with name comments(note not in comment;;plural name)
mongoose.model('Comment', CommentSchema);
