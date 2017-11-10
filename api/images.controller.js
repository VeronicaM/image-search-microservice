var images = require('./images.model');
var request = require('request');


exports.search = function(req, res) {
    var offset = req.query.offset || 1;
    var url = "https://www.googleapis.com/customsearch/v1?key=" +
        process.env.API_KEY + "&cx=" +
        process.env.ENGINE_ID + "&q=" + req.params.q + "&searchType=image&start=" + offset;
    request.get(
        url,
        function(err, response, body) {
            if (!response) {
                console.log('Error happened');
                res.status(500).send({ error: "Something went wrong" });
            } else {
                images.create({ term: req.params.q }, function(err, createdImage) {
                    var result = JSON.parse(body).items;
                    if (result) {
                        return res.send(formatResult(result));
                    } else {
                        return res.send([]);
                    }

                });
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
    images.find({})
        .sort({ 'createdAt': -1 })
        .limit(10)
        .exec(function(err, images) {
            if (err)
                res.send(err);
            res.json(images.map(function(img) {
                return { term: img.term, when: img.createdAt };
            }));
        });
};