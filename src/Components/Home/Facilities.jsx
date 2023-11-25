
const Facilities = () => {

    const facilities = [
        {
            id : 1,
          image: "https://hotelina-nextjs.vercel.app/assets/images/bg/locker-room.png",
          title: "Personal Locker",
         
        },
        {
            id : 2,
          image: "https://hotelina-nextjs.vercel.app/assets/images/bg/swiming-poll.png",
          title: "Swiming Poll",
         
        },
        {
            id : 3,
          image: "https://hotelina-nextjs.vercel.app/assets/images/bg/restaurant.png",
          title: "Restaurant",
         
        },
        {
            id : 4,
          image: "https://hotelina-nextjs.vercel.app/assets/images/bg/spa.png",
          title: "Spa & Beauty",
         
        },
        {
            id : 5,
          image: "https://hotelina-nextjs.vercel.app/assets/images/bg/gym.png",
          title: "Gym Center",
         
        },
        
        {
            id : 6,
          image: "https://hotelina-nextjs.vercel.app/assets/images/bg/transport.png",
          title: "Transport",
         
        },

    ]
  return (
    <div className="max-w-[1120px] mx-auto">
<h1 className="text-4xl text-[#151875] font-bold my-10 text-center">Hotel Facilities</h1>

<div className="grid md:grid-cols-3 grid-cols-1 mx-auto gap-5 justify-center  ">
{
    facilities.map ((facility) => {

        return (
         

          <div key={facility.id} className="card w-[270px] bg-base-100 shadow-xl">

{/* <figure><img src={facility.image} alt="img" /></figure> */}
<div className="">
        <img className="h-56  bg-gradient-to-r from-cyan-500 to-blue-500 " src={facility.image} alt="img" />
        <h2 className="m-5 absolute bottom-4 text-2xl text-center text-white font-bold">{facility.title}</h2>
       </div>


</div>



        )
    })
}
</div>
   </div>
  )
}

export default Facilities
{/* <img src="" alt="img"  />
        <img src="https://hotelina-nextjs.vercel.app/assets/images/bg/swiming-poll.png" alt="img"  />
        <img src="https://hotelina-nextjs.vercel.app/assets/images/bg/transport.png" alt="img"  />
        <img src="https://hotelina-nextjs.vercel.app/assets/images/bg/gym.png" alt="img"  />
        <img src="https://hotelina-nextjs.vercel.app/assets/images/bg/restaurant.png" alt="img"  />
        <img src="https://hotelina-nextjs.vercel.app/assets/images/bg/spa.png" alt="img"  />
  */}