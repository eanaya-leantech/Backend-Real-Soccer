module.exports = {
    port: process.env.PORT || 80,
    db: process.env.MONGODB_URI || 'mongodb+srv://edwik:95091310024@realsoccer-spksl.gcp.mongodb.net/admin?retryWrites=true&w=majority',
    //db: process.env.MONGODB || 'mongodb://190.144.179.82:2027/mockserverdb',
    SECRET_TOKEN: 'mysecrettoken$2019'
}