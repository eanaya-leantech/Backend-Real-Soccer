module.exports = {
    port: process.env.PORT || 80,
    db: process.env.MONGODB_URL || 'mongodb://localhost:2027/backendrealsoccer',
    //db: process.env.MONGODB || 'mongodb://190.144.179.82:2027/mockserverdb',
    SECRET_TOKEN: 'mysecrettoken$2019'
}