const express = require('express');
const router = express.Router();
const Reservation = require('../../models/model')


// @desc    Get all reservations
router.get('/', async (req, res) => {
    try{
        const reservations = await Reservation.find();
        res.status(200).send(reservations)
    } catch(err) {
        console.log(err);
    }
})

//@post     Post a reservation
router.post('/post', async (req, res) => {
    const { name, date } = req.body

    try {        
        const reservation = await Reservation.create(req.body);
        res.send(reservation)


    } catch(err) {
        console.log(err)
    }
})

//@delete   Delete a reservation
router.delete('/:id', async (req, res) => {

    try {
        const reservation = await Reservation.findById(req.params.id);
        console.log(reservation)
        if(!reservation){
            return res.status(404).json({
                success: false,
                error: 'No reservation found'
            });
        }

        await reservation.remove();

        return res.status(200).json({
            success:true,
            data: {}
        });

    } catch(err) {
        console.log(err)
    }
})


module.exports = router