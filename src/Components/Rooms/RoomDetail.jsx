/* eslint-disable react/prop-types */

const RoomDetail = ({details}) => {
    const {name , image, rentperday} = details 
  return (
    <div>
         <div   className="card w-[270px] bg-base-100 shadow-xl">
           
           

           <figure><img src={image} alt="img" /></figure>
 <div className="card-body">
   <p> <span className='font-bold text-cyan-400'>${rentperday}</span> / Per Night</p>
   <h2 className="card-title text-cyan-400">{name} </h2>
   
   <div className="card-actions"> 
   <button className="btn btn-accent">View Details</button>

 
   </div>
 </div>

         </div>
         </div>
  )
}

export default RoomDetail