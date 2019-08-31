let blocks = require('./initBlock');
module.exports = (name)=>{
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    console.log(blocks);
    return val;
}