import { useEffect, useState } from "react"
// import RoomCard from "./RoomCard";
 import {Link} from 'react-router-dom'

import PriceFilter from "../../Test/PriceFilter";
// import RoomList from "./RoomList";

const Rooms = () => {
  const [rooms,setRooms] = useState([]);

  useEffect(()=> { 
    fetch('http://localhost:5000/rooms')
    .then((res)=> res.json())
    .then((data)=> setRooms(data))
    .catch(error => console.error(error))
},[])

const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });

// Function to handle price range changes
const handlePriceRangeChange = (min, max) => {
  setPriceRange({ min, max });
};
const filteredRooms = rooms.filter(
  (room) => room.rentperday >= priceRange.min && room.rentperday <= priceRange.max
);

 
  return (
    <div>
      <div>
      <h2 className="text-3xl text-center mt-10 yongSerif m-5">Available Rooms</h2>

      <PriceFilter onPriceChange={handlePriceRangeChange} />
      <div className="grid max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md mb-12 gap-7">
        {filteredRooms.map((room) => (
          <div key={room._id} >
                         <Link to={`/detail/${room._id}`}>

          <div   className="card w-[270px] bg-base-100 shadow-xl">
           
           
          <Link to={`/detail/${room._id}`}>

            <figure><img src={room.image} alt="img" /></figure> </Link>
  <div className="card-body">
    <p> <span className='font-bold text-cyan-400'>${room.rentperday}</span> / Per Night</p>
    <h2 className="card-title text-cyan-400">{room.name} </h2>
    
    <div className="card-actions"> 
    <button className="btn btn-accent">View Details</button>

  
    </div>
  </div>

          </div>  </Link>
          </div>
        ))}
      </div> 
    </div>
        
        {/* <div className="grid max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-md mb-12 gap-7">
            {
                rooms.map((room)=> <RoomCard key={room._id} 
                room={room}></RoomCard> )
            }
        </div> */}
    </div>
  )
}

export default Rooms