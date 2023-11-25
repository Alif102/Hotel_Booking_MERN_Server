
const Testimonial = () => {
  return (
    <div>
        <div className="mx-auto mt-10 text-center md:max-w-xl lg:max-w-3xl">
  <h3
    className="mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">
    Guest Reviews
  </h3>
  {/* <p className="mb-6 pb-2 md:mb-12 md:pb-0">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
    amet numquam iure provident voluptate esse quasi, veritatis totam
    voluptas nostrum quisquam eum porro a pariatur veniam.
  </p> */}
</div>

{/* <!-- Container for the Testimonials --> */}
<div className="grid max-w-[1000px] mx-auto gap-6 text-center md:grid-cols-3 lg:gap-10">
  {/* First Testimonial */}



  <div className="mb-12 md:mb-0">
    <div className="mb-6 flex justify-center">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
        className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
      Guest
    </h6>
    <p className="mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Facilities and hotel view are fantastic. Breakfast menu was very awesome and complete. Hotel room was clean, very comfortable. I will back soon !
    </p>
  </div>

  {/* <!-- Second Testimonial --> */}
  <div className="mb-12 md:mb-0">
    <div className="mb-6 flex justify-center">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
        className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
      Guest
    </h6>
    <p className="mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff.
    </p>
   
  </div>


  <div className="mb-12 md:mb-0">
    <div className="mb-6 flex justify-center">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
          className="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 className="mb-4 text-xl font-semibold">Lisa Cudrow</h5>
    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
      Guest
    </h6>
    <p className="mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-7 w-7 pr-2"
        viewBox="0 0 24 24">
        <path
          d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
      </svg>
      The Hotel was conveniently located and is easily found. 2. The Large Room makes movement within the room very comfortable    </p>
   
  </div>

   
</div>
    </div>
  )
}

export default Testimonial


