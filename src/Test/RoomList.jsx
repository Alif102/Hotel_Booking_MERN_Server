import { useState } from 'react';
import PriceFilter from './PriceFilter';

function RoomList() {
  const initialRooms = [
    { id: 1, name: 'Room A', price: 100 },
    { id: 2, name: 'Room B', price: 150 },
    { id: 3, name: 'Room C', price: 200 },
    // Add more room data
  ];

  const [priceRange, setPriceRange] = useState({ min: 0, max: 300 });

  // Function to handle price range changes
  const handlePriceRangeChange = (min, max) => {
    setPriceRange({ min, max });
  };

  // Function to filter rooms based on the selected price range
  const filteredRooms = initialRooms.filter(
    (room) => room.price >= priceRange.min && room.price <= priceRange.max
  );

  return (
    <div>
      <h1>Available Rooms</h1>
      <PriceFilter onPriceChange={handlePriceRangeChange} />
      <ul>
        {filteredRooms.map((room) => (
          <li key={room.id}>
            {room.name} - ${room.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
