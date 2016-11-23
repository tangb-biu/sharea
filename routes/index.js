// 路由分配
module.exports = function(app){
	app.get('/', function(req, res){
		res.send("hello world!");
		//res.redirect('/home');
	});
	app.use('/signup', require('./signup'));
	app.use('/signin', require('./signin'));
	app.use('/signout', require('./signout'));
	app.use('/home', require('./home'));
}
