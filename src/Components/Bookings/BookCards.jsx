/* eslint-disable react/prop-types */

 import Swal from "sweetalert2";

const BookCards = ({booking, RemoveBookings ,setRemoveBookings}) => {
    const {details , _id } = booking;
    console.log(details)

    const handleDelete =() => {
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33', 
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          if (result.isConfirmed) {


              fetch(`https://backend-nine-liart.vercel.app/bookings/${_id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data);
                      if (data.deletedCount > 0) {
                          Swal.fire(
                              'Deleted!',
                              'Your Booking Room has been deleted.',
                              'success'
                          )
                          const remaining = RemoveBookings.filter(removeCart => removeCart._id !==  _id);
                          setRemoveBookings(remaining);
                      }
                  })

          }
      })
  }

  return (
    <div className="gap-4 max-w-[800px] mx-auto">
      <div className="flex gap-8">
        <div>
        <img className="w-36 rounded-lg" src={details?.image} alt="img" />

        </div>
      
        <div className="font-bold">
        <h2 className=" text-purple-700">{details?.name}</h2>   
            <h2 >Rent Per Night / ${details?.rentperday}</h2>
            <h2>MaxCount : {details?.maxcount}</h2>
        </div>
        <div onClick={handleDelete} >
          <h2 className="font-bold"> Cancel Booking</h2>
    <button  className="btn btn-square btn-sm">
     <img src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png" alt="delete" />
      </button>   
       </div>
    </div>
    </div>
  )
}

export default BookCards