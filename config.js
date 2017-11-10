module.exports = {
    mongo: {
        uri: 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASSWORD + '@ds255455.mlab.com:55455/image-search'
    },
    options: {
        db: {
            safe: true
        }
    }
}