import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Reso = () => {

    const [data, setData] = useState([])

    const list = async () =>{ 
            const info = await axios.get('http://localhost:5000/api/')
            const array = Object.entries(info)
            console.log(array[0])
            setData(array[0][1])
    } 

    const deleteReso = async (id, name, date) => {
        alert(`You are deleting ${name} on ${date}`)
        await axios.delete(`http://localhost:5000/api/${id}`)
            console.log(`http://localhost:5000/api/${id}`)
            
        list()
        }


    useEffect(() => {
        list()
    }, [])


    return (
        <div>
            {data.map(info => <h2 className="card" key={info._id}>Name: {info.name} Date: {info.date}
                <button onClick={ () => deleteReso(info._id, info.name, info.date)}>
                    Delete
                </button>
            
            </h2>)}
        </div>
    )
}

export default Reso
