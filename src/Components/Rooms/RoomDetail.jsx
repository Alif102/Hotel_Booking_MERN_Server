/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';
const RoomDetail = ({details}) => {
  let {user} = UseAuth();
    const {name ,desc,size, displayImagesOne,displayImagesTwo,displayImagesThree, rentperday} = details;

  const handleBookings = ()=>{
    fetch('https://backend-nine-liart.vercel.app/bookings', {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    }, 
    body : JSON.stringify({details, email: user.email })  
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.insertedId){
       Swal.fire({
        title: 'Success!',
        text: 'Room Booking Successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  })
  // You can handle form submission logic here, e.g., sending data to the server.
  console.log('Form data submitted:', details);
  }
  

    
  return (
    <div className="max-w-[1000px] mx-auto">
         

         <div className="card card-side bg-base-100 shadow-xl">



         <div className="carousel">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={displayImagesOne} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={displayImagesTwo} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={displayImagesThree} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>





  
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='text-gray-500'>Around {size} square feet</p>
    <p> <span className="font-bold text-2xl text-cyan-600">${rentperday}</span> / Per Night</p>
    <p className=" w-3/4 text-gray-500">{desc}</p>
    <div className="card-actions justify-center">
    
      <button 
      onClick={handleBookings}
     className="btn btn-primary justify-center">Book Now</button>
  
    </div>
  </div>
</div>
         </div>
  )
}

export default RoomDetail