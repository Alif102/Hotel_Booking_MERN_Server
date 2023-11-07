
import {BiBed} from 'react-icons/bi';
import {HiUserGroup} from 'react-icons/hi'

const SpecialOffer = () => {

    const features = [
        {
            id : 1,
          icon: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?cs=srgb&dl=pexels-pixabay-271624.jpg&fm=jpg",
          title: "Family Room",
          cost : 450,
          discount : 25,
          bed: "2 Double Bed",
          member : 6
        },
        { id: 2,
          icon: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/ed/56/c6/pixel-hotel.jpg?w=700&h=-1&s=1",
          title: "Family Room",
          cost : 400, discount : 45,
          bed: "1 Double Bed",
          member : 6
          },
        { id: 3,
          icon: "https://loginnhotels.com/wp-content/uploads/2022/05/OA2_9071-1-scaled-jpg.webp",
          title: "Family Room",
          cost : 490, discount : 65,
          bed: "1 Single Bed",
          member : 5 },
        { id:4,
          icon:"https://aw-d.tripcdn.com/images/1mc1k12000btgmzh4DA51_R_960_660_R5_D.webp" ,
          title: "Family Room",
          cost : 480, discount : 45,
          bed: "1 Double Bed",
          member : 2
         },
      ];
    
      
    return (
        <section className=' max-w-[1150px] mx-auto' >

            <h1 className="text-4xl text-[#151875] font-bold my-10 text-center">What Hoteliana Offer!</h1>

            <div className="grid lg:grid-cols-4 mx-auto gap-5 justify-center  ">
            {
                features.map ((feature) => {

                    return (
                     

                      <div key={feature.id} className="card w-[270px] bg-base-100 shadow-xl">
 
  <figure><img src={feature.icon} alt="img" /></figure>
  <div className="badge w-50 bg-[cyan] absolute top-2">{feature.discount}% Discount</div>

  <div className="card-body justify-center">
    <p> <span className='font-bold text-2xl text-cyan-400'>${feature.cost}</span> / Per Night</p>
    <h2 className="card-title text-cyan-400">{feature.title} </h2>
    <div className='flex items-center gap-3 text-gray-500'>
    {/* <p className='flex items-center '><BiBed/> {feature.bed}</p> */}
    <div className='flex gap-1 items-center'>
      
      <p><BiBed/></p>
      <p>{feature.bed}</p>
    </div>
    {/* <p className='flex items-center space-x-3 '>  <span></span></p> */}
    <div className='flex gap-2 items-center'>
      
      <p><HiUserGroup/></p>
      <p>{feature.member} Guest</p>
    </div>
    </div>
    <div className="card-actions">
      <button className="btn bg-[cyan]">Book Now</button>
    </div>
  </div>
</div>



                    )
                })
            }
            </div>
        
    </section>
    );
};

export default SpecialOffer;