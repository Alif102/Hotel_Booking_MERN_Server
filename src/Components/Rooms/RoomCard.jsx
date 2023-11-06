/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {BiBed} from 'react-icons/bi'
import {HiUserGroup} from 'react-icons/hi'

const RoomCard = ({room}) => {
  console.log(room)
  const [sortedRooms, setSortedRooms] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  // Sort rooms by rentperday when the component mounts or when the room prop changes
  useEffect(() => {

   


    const sorted = [...room]; // Create a copy of the original rooms array
    sorted.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.rentperday - b.rentperday;
      } else {
        return b.rentperday - a.rentperday;
      }
    });
    setSortedRooms(sorted);
  }, [room, sortOrder]);

    // const {name, rentperday, image} =room
  return (
    <div >
    
    {/* <div className="card w-[270px] bg-base-100 shadow-xl">
  <figure><img src={room.image} alt="img" /></figure>
  <div className="card-body">
    <p> <span className='font-bold text-cyan-400'>${room.rentperday}</span> / Per Night</p>
    <h2 className="card-title text-cyan-400">{room.name} </h2>
    <div className='flex items-center'>
    <p className='flex items-center'><BiBed/> {}</p>
    <p className='flex items-center'><HiUserGroup/> {}</p>
    </div>
    <div className="card-actions">
      <button className="btn btn-accent">Book Now</button>
    </div>
  </div>
</div> */}

<div>
     

      {
        sortedRooms.map((room) => {

          <div key={room._id} className="card w-[270px] bg-base-100 shadow-xl">
<figure><img src={room.image} alt="img" /></figure>
  <div className="card-body">
    <p> <span className='font-bold text-cyan-400'>${room.rentperday}</span> / Per Night</p>
    <h2 className="card-title text-cyan-400">{room.name} </h2>
    <div className='flex items-center'>
    <p className='flex items-center'><BiBed/> {}</p>
    <p className='flex items-center'><HiUserGroup/> {}</p>
    </div>
    <div className="card-actions">
      <button className="btn btn-accent">Book Now</button>
    </div>
  </div>
          </div>
        })
      }

      <button
        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
        className="btn btn-accent"
      >
        Toggle Sort Order
      </button>
    </div>




    
   


  </div>
  )
}

export default RoomCard
{/* <Link to={`/details/${title}`}> */}
 {/* Render your sorted room cards here */}
