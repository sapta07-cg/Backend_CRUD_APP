const { builtinModules } = require("module");

function add(a,b){
  return a+b;
}

function sub(a,b){
    return a-b;
  }

exports.mul=(a,b)=>a*b  

module.exports={add,sub}