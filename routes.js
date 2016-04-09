module.exports = function(app) {

    app.get('/api/ping', function(req, res, next) {
        res.send("pong");
    });
    
    var registrationHandler = require('./app/handlers/registration-handler');

	
	app.post('/api/registration', registrationHandler.registerUser);
    

};

