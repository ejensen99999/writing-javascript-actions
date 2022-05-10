var core = require ("@actions/core")

var firstG = core.getInput("first-greeting")
var secondG = core.getInput("second-greeting")

console.log(`Hello ${firstG}`);

if(secondG)
{
    console.log(`Hello ${secondG}`)
}