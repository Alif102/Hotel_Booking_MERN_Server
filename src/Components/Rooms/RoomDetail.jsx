/* eslint-disable react/prop-types */

const RoomDetail = ({details}) => {
    const {name , displayImagesOne,displayImagesTwo,displayImagesThree, rentperday} = details 
  return (
    <div>
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



         <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={displayImagesOne} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
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
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>





  
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{rentperday}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
         </div>
  )
}

export default RoomDetail