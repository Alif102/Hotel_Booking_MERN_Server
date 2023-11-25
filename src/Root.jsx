import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
// import RoomList from "./Test/RoomList"
import { Toaster } from "react-hot-toast"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

const Root = () => {
  return (
    <div>
      <Toaster/>
      <Navbar/>
      {/* <RoomList/> */}
      <Outlet/>
    </div>
  )
}

export default Root