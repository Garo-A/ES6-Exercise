// app.js //

//require and initiate expess

const app = require('express')()

//Fake posts to simulate database

const posts = [
{
    id: 1,
    author: "John",
    title: "Templating with EJS",
    body: "Blog post number 1",
},
{
  id: 2,
  author: "Garo",
  title: "Express: Starting from the bottom",
  body: "Blog post number 2",
},
{
  id: 3,
  author: "Gacia",
  title: "Streams",
  body: "Blog post number 3",
},
{
  id: 4,
  author: "Cody",
  title: "Events",
  body: "Blog post number 4",
},
]

//set the view engine to ejs

app.set('view engine','ejs');

//blog home page

app.get("/", (req,res) => {
  //render "home.ejs" with the lists of posts
  res.render('home', {posts:posts})
  })

//blog posts
app.get("/post/:id", (req,res) => {
  //find the post in the 'posts' array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  //render the 'posts.ejs' template with the post content

  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body,
  })
})

app.listen(8080);

console.log("Listening on port 8080")