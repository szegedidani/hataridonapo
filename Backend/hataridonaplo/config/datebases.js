const host = 'localhost'
const port = 27017
const database = 'users'

const options = {
    connectTimeoutMS: 2000,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0
}

const uri = `mongodb://@${host}:${port}/${database}?authMechanism=SCRAM-SHA-1`


module.exports = {
    uri: uri,
    options: options
}