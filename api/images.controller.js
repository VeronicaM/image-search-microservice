var images = require('./images.model');
var request = require('request');


exports.search = function(req, res) {
    var url = "https://www.googleapis.com/customsearch/v1?key=" +
        process.env.API_KEY + "&cx=" +
        process.env.ENGINE_ID + "&q=" + req.params.q + "&searchType=image&start=" + req.query.offset;
    request.get(
        url,
        function(err, response, body) {
            if (!response)
                console.log('Error happened');
            else {
                res.send(formatResult(JSON.parse(body).items));
            }

        });
};

function formatResult(result) {
    return result.map(function(item) {
        return {
            url: item.link,
            snippet: item.snippet,
            thumbnail: item.image.thumbnailLink,
            context: item.image.contextLink
        };
    });
}

exports.listSearches = function(req, res) {
    // images.find({ userId: req.user._id }, function(err, clients) {
    //     if (err)
    //         res.send(err);

    //     res.json(clients);
    // });
    res.send("listing images searches");
};