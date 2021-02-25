const mongoose = require('mongoose');


const newReservation = mongoose.Schema ({
    name:{
        type: String,
        required: [true, 'name required']
    },
    date: {
        type: Date,
        required: [true, 'date required']
    }



})

module.exports = mongoose.model('Reservation', newReservation)