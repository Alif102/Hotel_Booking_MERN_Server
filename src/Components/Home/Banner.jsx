
const Banner = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 md:max-w-[1000px] mx-auto gap-8 items-center'>
        <div className='text-center space-y-8'>
            <h1 className="text-2xl yongSerif text-cyan-600">Find The Coolest Hotel</h1>
            <h1 className="text-5xl font-bold">Enjoy The Best Hotel Experience.</h1>

            <div className='flex flex-1 items-center md:gap-9 gap-3 text-xl text-center font-semibold justify-center font-sans'>
            <div>
                <h1>Restaurant</h1>
                <img className="md:ml-5" src="https://hotelina-nextjs.vercel.app/assets/images/icons/restaurant33.svg" alt="img" />
            </div>

            <div>
                <h1>Spa</h1>
                <img src="https://hotelina-nextjs.vercel.app/assets/images/icons/spa33.svg" alt="" />
            </div>

            <div>
                <h1>Gym</h1>
                <img src="https://hotelina-nextjs.vercel.app/assets/images/icons/treadmill33.svg" alt="img" />
            </div>

            <div >
                <h1>Gaming</h1>
                <img className="md:ml-2" src="https://hotelina-nextjs.vercel.app/assets/images/icons/game-controller33.svg" alt="img" />
            </div>
            <div>
                <h1>Pool</h1>
                <img src="https://hotelina-nextjs.vercel.app/assets/images/icons/pool33.svg" alt="img" />
            </div>
            </div>
        </div>

        <div className="md:w-[500px] w-[350px] rounded-lg">
            <img src="https://hotelina-nextjs.vercel.app/assets/images/bg/h3-banner-right-bg.png" alt="img" />
        </div>
    </div>
  )
}

export default Banner