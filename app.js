var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
// app.set("view engine", "ejs")


app.get("/", function(req,res){
    res.render("home")
})

app.post("/submit", function(req, res){
    var name = req.body.fullname,
    	email = req.body.email,
    	phone = req.body.phone,
    	usage = req.body.usage
    	total = req.body.total

    friends.push(newFriend)
    res.redirect("/thankyou")
})

app.get("/friends", function(req,res){
    res.render("friends",{friends: friends})
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started!")
})