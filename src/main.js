const $  = require("../node_modules/jquery");
const testTemplate = require('./views/index.hbs');

let data = {name:'roshan'};

$('#appinit').html(testTemplate(data));
require('./js/ro');