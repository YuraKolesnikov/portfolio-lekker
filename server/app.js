const cors				= require('cors'),
			morgan			= require('morgan'),
			express 		= require('express'),
			bodyParser 	= require('body-parser')

const { apiRouter } = require('./router/ApiRouter')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api', apiRouter)

module.exports = app