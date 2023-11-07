/* eslint-disable react/prop-types */

// import Link from 'react-router-dom'

const RoomCard = ({room}) => {
  console.log(room)
  

   


    // const {_id} =room;
  return (
    <div >
    
    

<div>
     

      
{/* <Link > */}
          <div key={room._id} className="card w-[270px] bg-base-100 shadow-xl">
<figure><img src={room.image} alt="img" /></figure>
  <div className="card-body">
    <p> <span className='font-bold text-cyan-400'>${room.rentperday}</span> / Per Night</p>
    <h2 className="card-title text-cyan-400">{room.name} </h2>
   
    <div className="card-actions">
      <button className="btn btn-accent">View Details</button>
    </div>
  </div>
          </div>
      

       

      
    </div>




    
   


  </div>
  )
}

export default RoomCard
{/* <Link to={`/details/${title}`}> */}
 {/* Render your sorted room cards here */}
