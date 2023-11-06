import { useEffect, useState } from "react"
import RoomCard from "./RoomCard";
// import RoomList from "./RoomList";

const Rooms = () => {
  const [rooms,setRooms] = useState([]);

  useEffect(()=> { 
    fetch('http://localhost:5000/rooms')
    .then((res)=> res.json())
    .then((data)=> setRooms(data))
    .catch(error => console.error(error))
},[])

 

 
  return (
    <div>
        
        <h2 className="text-3xl text-center mt-10 yongSerif m-5">Our Featured Rooms</h2>
        <div className="grid max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md mb-12 gap-7">
            {
                rooms.map((room)=> <RoomCard key={room._id} 
                room={room}></RoomCard> )
            }
        </div>
    </div>
  )
}

export default Rooms