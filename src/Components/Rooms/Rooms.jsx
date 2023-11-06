import { useEffect, useState } from "react"
import axios from 'axios';

const Rooms = () => {
  const [rooms,setRooms] = useState([])

  useEffect( ()=>{
    try {
      const data = ( axios.get('/getallrooms')).data
      setRooms(data)
      
    } catch (error) {
      console.log(error)
      
    }

  },[])

  // useEffect(async () => {
  //   try {
  //     const data = await axios.get('/getallrooms')
      
  //   } catch (error) {
      
  //   }

  // },[])
  return (
    <div>
      <h1>there are {rooms.length}</h1>

    </div>
  )
}

export default Rooms