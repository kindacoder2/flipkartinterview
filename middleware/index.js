var User = require("../models/User");
module.exports = {
    isLoggedIn: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash("error", "You must be signed in to do that!");
        //alert("Must signed to that");
        res.redirect("/");
    },
    isAdmin: function(req, res, next) {
        User.find({ email: req.user.email }, function(err, user) {
            if (user.isHr == true) {
                return next();
            } else {
                req.flash("error", "You normal user");
                //alert("Must signed to that");
                res.redirect("/users");
            }
        })
    }
}