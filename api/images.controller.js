var images = require('./images.model');

exports.search = function(req, res) {
    res.send("searching images");
};

exports.listSearches = function(req, res) {
    // images.find({ userId: req.user._id }, function(err, clients) {
    //     if (err)
    //         res.send(err);

    //     res.json(clients);
    // });
    res.send("listing images searches");
};