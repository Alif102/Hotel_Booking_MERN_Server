import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../Shared/Container'
import Header from './Header'
import RoomInfo from './RoomInfo'
import Loader from '../Shared/Loader'
import RoomReservation from './RoomReservation'

const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/rooms.json')
      .then(res => res.json())
      .then(data => {
        const singleRoom = data.find(room => room._id === id)
        setRoom(singleRoom)
        setLoading(false)
      })
  }, [id])

  if (loading) return <Loader />
  return (
    <Container>
      
        
      <div className=' mx-auto'>
        <div className='flex flex-col gap-6'>
            <Header room={room}/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-8 mt-9'>
            <RoomInfo room={room}/>
             {/* Calender */}
             <div className=' col-span-2 order-first md:order-last'>
              <RoomReservation/>
             </div>
        </div>
       
      </div>
    </Container>
  )
}

export default RoomDetails