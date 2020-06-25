// var db = require('./models')

// db.comment.create({
//   name: 'Anna',
//   comment: '10/10 would recommend',
//   articleId: 1
// })
// .then(function(comment) {
//   console.log(comment.get())
// })

var db = require('./models')

db.article.findOne({
  where: { id: 1 },
  include: [db.comment]
}).then(function(article) {
  // by using eager loading, the article model should have a comments key
  console.log(article.comments)
})