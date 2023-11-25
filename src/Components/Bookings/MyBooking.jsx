// // import { useLoaderData } from "react-router-dom"
// // import { useEffect, useState } from "react";
// // import UseAuth from "../../Hooks/UseAuth";

import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import BookCards from "./BookCards";

// import { Space, DatePicker } from "antd";
import { Helmet } from "react-helmet";
// const { RangePicker } = DatePicker;



const MyBooking = () => {
  const [RemoveBookings, setRemoveBookings] = useState([]);
  // const [fromDate,setFromDate] = useState();
  // const [todate,setToDate] = useState();
    let {user} = UseAuth();
    let email = user.email;
    
    useEffect(()=> {

      fetch(`https://backend-nine-liart.vercel.app/bookings/${email}`, {credentials: 'include'})
      .then(res => res.json())
      .then(data => setRemoveBookings(data))
    } ,[email])
    if (RemoveBookings?.length === 0 ) 
    {
      <div>
        No Room 
      </div>
    }
    // const filterByDate = (dates)=> {
    //   setFromDate(moment(dates[0]).format('DD-MM-YYYY'))
    //   setToDate(moment(dates[1]).format('DD-MM-YYYY'))
    
    
    // }

  return (
  
    <div>
      <Helmet>
        <title>My Bookings</title>
        <meta name="description" content="This is Home" />
      </Helmet>
      {/* <div className="flex flex-col gap-1 justify-center mb-5 text-center">
   <h2 className="font-semibold">Select Date For Room Booking</h2> 
     <Space className=" font-bold" direction="vertical" size={12}>  <RangePicker format='DD-MM-YYYY' onChange={filterByDate} /> </Space>
     
   </div> */}

    <div className="grid grid-cols-1 gap-6 space-y-4 mt-20 ">

      
        {  
        RemoveBookings?.length > 0 ?
        
            RemoveBookings?.map(booking => <BookCards
                 key={booking._id}
                 booking={booking}
                 RemoveBookings={RemoveBookings}
              
                 setRemoveBookings={setRemoveBookings}
                  ></BookCards>) 
                  :
                  <h2 className="m-10 text-3xl text-center">No Room booking. Add some Booking Room</h2>

        
                    

        }
    </div>
</div>
      
      
  )
}

export default MyBooking