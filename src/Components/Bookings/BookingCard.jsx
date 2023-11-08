/* eslint-disable react/prop-types */
import Swal from 'sweetalert2';
const BookingCard = ({cart, RemoveCarts, setRemoveCarts}) => {
    const {details, _id} = cart;
    // let {price, image, name, brand} = details;
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


              fetch(`http://localhost:5000/carts/${_id}`, {
                  method: 'DELETE'
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data);
                      if (data.deletedCount > 0) {
                          Swal.fire(
                              'Deleted!',
                              'Your Product has been deleted.',
                              'success'
                          )
                          const remaining = RemoveCarts.filter(removeCart => removeCart._id !==  _id);
                          setRemoveCarts(remaining);
                      }
                  })

          }
      })
  }
   

  
    return (
    <div className="flex gap-4 justify-center items-center">
        <div>
        <img className="w-36 rounded-lg" src={details?.image} alt="img" />

        </div>
      
        <div>
        <h2 className="font-bold text-purple-700">{details?.name}</h2>   
            {/* <h2>Price: ${price}</h2>
            <h2>Brand: {brand}</h2> */}
        </div>
        <div>
<button onClick={handleDelete}

 className="btn btn-square btn-sm">
     <img src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png" alt="delete" />
      </button>   
       </div>
       
    
    </div>


  )
}

export default BookingCard