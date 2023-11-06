/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterBar from "./FilterBar";
import RoomCard from "./RoomCard";

const RoomList = ({rooms}) => {
    const [filteredRooms, setFilteredRooms] = useState(rooms);
    console.log(rooms)

  const handleFilter = (minPrice, maxPrice) => {
    const filtered = rooms.filter((room) => room.rentperday >= minPrice && room.rentperday <= maxPrice);
    setFilteredRooms(filtered);
  };
  return (
    <div>
         <FilterBar onFilter={handleFilter} />
      <div className="room-list">
        {filteredRooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>


  )
}

export default RoomList