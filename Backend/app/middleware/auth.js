module.exports = {
    isLogin: async(req , res , next) => {
        if(req.session.user === null || req.session.user === undefined){
            req.flash("alertMessage", "Session anda habis");
            req.flash("alertStatus", "danger");
            res.redirect("/");
        }else {
            next();
        }
    }
}