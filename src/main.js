const $  = require("../node_modules/jquery");
const testTemplate = require('./views/index.hbs');

let data = {name:'roshan'};


let routes = {};

function page (route,render){
    defaultRenderDir = './views/';
    routes[route] = `${defaultRenderDir}${render}`;
};

//--------------Define route-------------
page('/page/1','page1.hbs');
page('/page/2','page2.hbs');
//-------------------Define route ends here-----------



window.addEventListener('hashchange',()=>{

    let uri = window.location.hash.split('#').reverse()[0];
    if (Object.keys(routes).indexOf(uri) != -1) {
        $('spa').html(require(`${routes[uri]}`));
    } else {
        $('spa').html('<h3>No route found to handle this request</h3>');
    }
})

$('#appinit').html(testTemplate(data));
require('./js/ro');