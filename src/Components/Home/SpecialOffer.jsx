
import {BiBed} from 'react-icons/bi';
import {HiUserGroup} from 'react-icons/hi'

const SpecialOffer = () => {

    const features = [
        {
            id : 1,
          icon: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?cs=srgb&dl=pexels-pixabay-271624.jpg&fm=jpg",
          title: "Family Room",
          cost : 450,
          discount : 45,
          bed: "1 Double Bed",
          member : 6
        },
        { id: 2,
          icon: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/ed/56/c6/pixel-hotel.jpg?w=700&h=-1&s=1",
          title: "Family Room",
          cost : 450, discount : 45,
          bed: "1 Double Bed",
          member : 6
          },
        { id: 3,
          icon: "https://loginnhotels.com/wp-content/uploads/2022/05/OA2_9071-1-scaled-jpg.webp",
          title: "Family Room",
          cost : 450, discount : 45,
          bed: "1 Double Bed",
          member : 6 },
        { id:4,
          icon:"https://aw-d.tripcdn.com/images/1mc1k12000btgmzh4DA51_R_960_660_R5_D.webp" ,
          title: "Family Room",
          cost : 450, discount : 45,
          bed: "1 Double Bed",
          member : 6
         },
      ];
    
      
    return (
        <section className=' max-w-[1150px] mx-auto' >

            <h1 className="text-4xl text-[#151875] font-bold my-10 text-center">What GIORGIO ARMANI Offer!</h1>

            <div className="grid lg:grid-cols-4 mx-auto gap-5 justify-center  ">
            {
                features.map ((feature) => {

                    return (
                      //  <div key={feature.id} className=" max-w-sm py-5 shadow-md text-center align-text-bottom  rounded-xl">
                      //     {feature.icon}

                      //       <p className="text-[#151875] text-xl font-bold">{feature.title}</p>
                      //       <p style={{color : 'rgba(26, 11, 91, 0.30)'}} className="p-6 ">{feature.desc}</p>

                      //   </div>

                      <div key={feature.id} className="card w-[270px] bg-base-100 shadow-xl">
  <figure><img src={feature.icon} alt="img" /></figure>
  <div className="card-body">
    <p> <span className='font-bold text-cyan-400'>${feature.cost}</span> / Per Night</p>
    <h2 className="card-title text-cyan-400">{feature.title} </h2>
    <div className='flex items-center'>
    <p className='flex items-center'><BiBed/> {feature.bed}</p>
    <p className='flex items-center'><HiUserGroup/> {feature.member}</p>
    </div>
    <div className="badge w-50 badge-secondary">{feature.discount}% Discount</div>
    <div className="card-actions">
      <button className="btn btn-accent">Book Now</button>
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