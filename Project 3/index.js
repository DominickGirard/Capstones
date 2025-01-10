import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var blogPosts = [{"identifier": -1, "title": "First Blog", "body": "Welcome to this websites first ever blog! I think it's cool that your reading this, and you found yourself somewhere special. Now go out there and do some blogging!!"}, {"identifier": -2, "title": "Whales", "body": "Something about whales"}];
var count = 0;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        blogPosts: blogPosts
    });
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.post("/generatePost", (req, res) => {
    var identifier = ++count;

    // console.log(req.body);

    blogPosts.push({
        identifier: identifier,
        title: req.body["postTitle"],
        body: req.body["postBody"]
    });
    
    res.redirect("/");
});

app.post("/edit", (req, res) => {
    console.log(req.body);
    if (req.body["blogToChange"] != "") {
        for(var i = 0; i < blogPosts.length; i++) {
            if(blogPosts[i]["identifier"] == req.body["blogToChange"]) {
                blogPosts[i]["title"] = req.body["postTitle"]
                blogPosts[i]["body"] = req.body["postBody"]
            }
        }
    }

    res.redirect("/");
});

app.post("/delete", (req, res) => {
    for(var i = 0; i < blogPosts.length; i++) {
        if(blogPosts[i]["identifier"] == req.body["blogToChange"]){
            var index = blogPosts.indexOf(blogPosts[i]);
            blogPosts.splice(index, 1);
        }
    }

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});