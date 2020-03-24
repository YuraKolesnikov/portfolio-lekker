const http 		= require('http'),
			app			= require('./app'),
			config	= require('./config/config')

const server = http.createServer(app)

server.listen(config.port, () => console.log(`App started on ${config.port}`))