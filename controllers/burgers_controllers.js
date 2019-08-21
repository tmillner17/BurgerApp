var burger = require("../models/burgers.js");

module.exports = function(app) {
    
app.get("/", function(req, res) {
    burger.getBurger(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});

app.post("/api/burger", function(req, res) {
    console.log(req.body)
    burger.create(
        req.body.burger, 
    function(data) {
        console.log(data)
        res.redirect('/');

    });
});
app.put('/api/:id', function(req, res) {
    console.log(req.params.id);
    burger.devour(req.params.id, function() {
        res.status(200).end();
    })
});
}