

const SpecialOffer = () => {

    const features = [
        {
            id : 1,
          icon: "https://aw-d.tripcdn.com/images/1mc1k12000btgmzh4DA51_R_960_660_R5_D.webp",
          title: "Standard Room",
          cost : 450,
          discount : 25,
          bed: "2 Double Bed",
          member : 6
        },
        { id: 2,
          icon: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
          title: "Family Room",
          cost : 400, discount : 45,
          bed: "1 Double Bed",
          member : 6
          },
        { id: 3,
          icon: "https://loginnhotels.com/wp-content/uploads/2022/05/OA2_9071-1-scaled-jpg.webp",
          title: "Superior Room",
          cost : 420, discount : 65,
          bed: "1 Single Bed",
          member : 5 },
        { id:4,
          icon:"https://plus.unsplash.com/premium_photo-1682125907963-422dd79e0a38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D" ,
          title: "Family Room",
          cost : 280, discount : 45,
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