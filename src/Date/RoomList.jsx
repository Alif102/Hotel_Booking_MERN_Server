import {Link} from 'react-router-dom'
const RoomList = () => {
    const rooms =[
        {
            id: 1,
            name : 'Room 1',
            image: 'room1.jpg',
          },
          {
            id: 2,
            name: 'Room 2',
            image: 'room2.jpg',
          },
          // Add more room objects here
        ];
  return (
    <div>
        <div>
      <h1>Available Rooms</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>
              <img src={room.image} alt={room.name} />
              <p>{room.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default RoomList