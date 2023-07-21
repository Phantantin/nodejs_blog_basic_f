const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/F8_Chip_dev');

        console.log('Connect successfuly...');
    } catch (error) {
        console.log('Connect falurai...');
    }
}

module.exports = { connect };
