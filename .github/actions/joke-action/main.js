var getJoke = require("./joke");
var core = require("@actions/core");

async function run() {
    var joke = await getJoke();
    console.log(joke);
    core.setOutput("joke-output", joke);
}

run();