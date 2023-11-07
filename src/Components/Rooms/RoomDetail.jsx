/* eslint-disable react/prop-types */

const RoomDetail = ({details}) => {
    const {name ,desc, displayImagesOne,displayImagesTwo,displayImagesThree, rentperday} = details 
  return (
    <div className="max-w-[1000px] mx-auto">
         {/* <div   className="card w-[270px] bg-base-100 shadow-xl">
           
           

           <figure><img src={image} alt="img" /></figure>
 <div className="card-body">
   <p> <span className='font-bold text-cyan-400'>${rentperday}</span> / Per Night</p>
   <h2 className="card-title text-cyan-400">{name} </h2>
   
   <div className="card-actions"> 
   <button className="btn btn-accent">View Details</button>

 
   </div>
 </div>

         </div> */}

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
    <p> <span className="font-bold text-2xl text-cyan-600">${rentperday}</span> / Per Night</p>
    <p className=" w-3/4 text-gray-500">{desc}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary justify-center">Book Now</button>
    </div>
  </div>
</div>
         </div>
  )
}

export default RoomDetail