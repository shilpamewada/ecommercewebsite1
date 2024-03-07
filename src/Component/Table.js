import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Table.css'

function Table() {
    let [data, setdata] = useState(null)
    const fetchdata = async () => {
        try {
            let response = await axios.get("http://localhost:3004/fetchtable")
            console.log(response)
            console.log(response.data)
            setdata(response.data)
        }
        catch (err) {
            console.log(err)

        }

    }

    useEffect(() => {
        fetchdata()
    }, [])
  return (
<div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.address}</td>
              <td>{item.state}</td>
              <td>
                <button className='btn btn-primary'>Update</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table
