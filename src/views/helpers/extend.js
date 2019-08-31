let blocks = require('./initBlock');
module.exports = (name, context)=>{
    var block = blocks[name] || [];
    block.push(context.fn(this));
}