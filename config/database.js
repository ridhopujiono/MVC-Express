const {Sequelize} = require('sequelize');
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'movies'
});

db
    .authenticate()
    .then(()=> {
        console.log('Koneksti Berhasil');
    }).catch((err) => {
        console.error('Koneksi Gagal:', err);
    });

module.exports = db;