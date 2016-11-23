module.exports = {
	port: 4000,
	session: {
		secret: 'sharea',
		key: 'sharea',
		maxAge: 2592000000
	},
	mongodb: 'mongodb://localhost:27017/sharea'
}
