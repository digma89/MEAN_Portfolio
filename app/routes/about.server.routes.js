/*--By Diego Rodriguez 2/13/16
    Title: Personal portafolio */

//bring the render from the controller
module.exports = function(app){
    var about = require('../controllers/about.server.controller');
    app.get('/about', about.render);
};