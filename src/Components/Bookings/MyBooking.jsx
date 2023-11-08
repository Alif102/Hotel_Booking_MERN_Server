
const MyBooking = () => {
  return (
    <div>MyBooking</div>
  )
}

export default MyBooking

// app.get('/bookings', async (req,res)=> {
//     const id = req.params.id
//     // console.log(id)
//     const cursor = bookingCollection.find();
//     const result = await cursor.toArray();
//     res.send(result);
//   })

//   app.get('/bookings/:email', async (req, res) => {
//     const email = req.params.email  
//     const result = await bookingCollection.find({ email: email }).toArray()
//     res.send(result)
  
//   })