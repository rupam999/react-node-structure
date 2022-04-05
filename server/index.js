const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();
const router = express.Router();

/****************CROS****************/
const cors = require('cors');
app.use(
	cors({
		origin: '*',
	})
);
app.options('*', cors());

/****************DOTENV****************/
const dotenv = require('dotenv');
dotenv.config({
	path: path.join(__dirname, '.env'),
});

app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000);
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

// Serve our static build files
app.use(express.static(path.join(__dirname, '../client/build')));

/****************DEFAULT API ENDPOINT****************/
app.use('/api', router);

/****************SERVER****************/
if (process.env.NODE_ENV === 'development') {
	app.use((err, req, res, next) => {
		res.status(500).send({
			error: 1,
			err,
			message: 'Internal Server Error',
		});
	});
} else {
	app.use((err, req, res, next) => {
		res.status(500).send({
			error: 1,
			err,
			message: 'Internal Server Error',
		});
	});
}

app.listen(app.get('port'), () => {
	console.log(
		'Node.js App is running at http://localhost:%d',
		app.get('port'),
		app.get('env')
	);
	console.log('Press CTRL-C to stop\n');
});

/***************************************************************/
/************************ALL Routes****************************/
/*************************************************************/
const dummyRoutes = require('./routes/dummy');

dummyRoutes(router);

// Serving react on routes unused by previous routing
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = app;

// // Bodyparsing
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
