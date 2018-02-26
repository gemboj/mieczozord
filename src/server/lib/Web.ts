declare let require;
declare let process;

export default class Web {
	get server(): any {
		return this._server;
	}
	private _server: any;
	private app: any;
	private debug: any = require('debug')('web:server');
	private port: any = this.normalizePort('3000');
	private http = require('http');
	private express = require('express');

	constructor(){
		this.initializeApp();
		this.initializeServer()
	}

	private initializeServer() {
		this.app.set('port', this.port);

		/**
		 * Create HTTP server.
		 */

		this._server = this.http.createServer(this.app);

		/**
		 * Listen on provided port, on all network interfaces.
		 */

		this._server.listen(this.port);
		this._server.on('error', (e) => {this.onError(e)});
		this._server.on('listening', ()=>{this.onListening()});
	}



	private initializeApp() : any {

		var path = require('path');
		var favicon = require('serve-favicon');
		var logger = require('morgan');
		var cookieParser = require('cookie-parser');
		var bodyParser = require('body-parser');

		var index = this.getRouter();

		var app = this.express();

		app.set('views', './web/views');
		app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
		app.use(logger('dev'));
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: false }));
		app.use(cookieParser());
		app.use(this.express.static('./web/public'));

		app.use('/', index);

		app.use(function(req, res, next) {
			var err:any = new Error('Not Found');
			err.status = 404;
			next(err);
		});

		app.use(function(err, req, res, next) {
			// set locals, only providing error in development
			res.locals.message = err.message;
			res.locals.error = req.app.get('env') === 'development' ? err : {};

			// render the error page
			res.status(err.status || 500);
			res.render('error');
		});

		this.app = app;
	}

	private onListening() {
		var addr = this._server.address();
		var bind = typeof addr === 'string'
			? 'pipe ' + addr
			: 'port ' + addr.port;
		this.debug('Listening on ' + bind);
	}

	private onError(error) {
		if (error.syscall !== 'listen') {
			throw error;
		}

		var bind = typeof this.port === 'string'
			? 'Pipe ' + this.port
			: 'Port ' + this.port;

		// handle specific listen errors with friendly messages
		switch (error.code) {
			case 'EACCES':
				console.error(bind + ' requires elevated privileges');
				process.exit(1);
				break;
			case 'EADDRINUSE':
				console.error(bind + ' is already in use');
				process.exit(1);
				break;
			default:
				throw error;
		}
	}

	private normalizePort(val) {
		let port = parseInt(val, 10);

		if (isNaN(port)) {
			// named pipe
			return val;
		}

		if (port >= 0) {
			// port number
			return port;
		}

		return false;
	}

	private getRouter(): any{
		var router = this.express.Router();

		/* GET home page. */
		router.get('/', function (req, res, next) {
			res.render('index', {title: 'Mieczozord'});
		});

		return router;
	}
}