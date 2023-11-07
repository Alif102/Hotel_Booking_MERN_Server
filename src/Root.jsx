import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
// import RoomList from "./Test/RoomList"

const Root = () => {
  return (
    <div>
      <Navbar/>
      {/* <RoomList/> */}
      <Outlet/>
    </div>
  )
}

export default Root