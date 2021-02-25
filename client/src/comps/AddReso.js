import React, { useState } from 'react'
import axios from 'axios'

const AddReso = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
   
    const onSubmit = e => {
        // e.preventDefault();
        const newReservation = {
            name: name,
            date: date
        }
        axios.post('http://localhost:5000/api/post', newReservation)
    }

    return (
        <div>
            <h1>Add Reservation</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="date">Preferred Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddReso


