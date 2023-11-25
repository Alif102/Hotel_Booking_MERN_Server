// import Banner from "./Banner"
// import Facilities from "./Facilities";
// import Feature from "./Feature"
// import SpecialOffer from "./SpecialOffer"
// import Testimonial from "./Testimonial"
import { Helmet } from 'react-helmet';
// import Rooms from '../../Rooms/Rooms';
// import Categories from '../Categories/Categories';
import Container from '../../Shared/Container';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Hotel Room Booking</title>
        <meta name="description" content="This is Home" />
      </Helmet>
      <Container>
      {/* <Categories/>
      <Rooms/> */}

      </Container>
      
      {/* <Banner/>
      <Feature/>
      <Facilities/>
      <SpecialOffer/>
      <Testimonial/> */}

    </div>
  )
}

export default Home