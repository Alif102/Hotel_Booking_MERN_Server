import { Helmet } from 'react-helmet-async'
import Categories from '../../Components/Categories/Categories'
import Rooms from '../../Rooms/Rooms'
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>StayVista | Vacation Homes & Condo Rentals</title>
      </Helmet>
      {/* Categories section  */}
      <Categories />
      {/* Rooms section */}
      <Rooms />
    </div>
  )
}

export default Home