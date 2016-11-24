module.exports = {
	checkLogin: function checkLogin(req, res, next){
		if(!req.session.user){
			req.flash('error', '还没登陆');
			return res.redirect('/signin');
		}
		next();
	},
	checkNotLogin: function checkNotLogin(req, res, next){
		if(req.session.user){
			req.flash('error', '已经登录');
			return res.redirect('/home'); 
		}
		next();
	}
}