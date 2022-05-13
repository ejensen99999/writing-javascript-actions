var request = require("request-promise");

var options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action GitHub Learning Lab course.  Visit lab.github.com or to contact us."
    },
    json: true
};

async function getJoke() {
    var res = await request(options);
    return res.joke;
}

module.exports = getJoke;