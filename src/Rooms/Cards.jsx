/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
const Cards = ({room}) => {
  return (

<Link to={`/room/${room?._id}`} className="card w-96 bg-base-100 group shadow-xl">
  <figure><img className='group-hover:scale-110 transition' src={room.image} alt="Shoes" /></figure>
  <div className="card-body">
  <div className='font-semibold text-lg'>{room?.location}</div>
        <div className='font-light text-neutral-500'>5 nights .</div>
         <div className='flex flex-row items-center gap-1'>
           <div className='font-semibold'>$ {room?.price}</div>
           <div className='font-light'>night</div>
  </div></div>
</Link>
  )
}

export default Cards