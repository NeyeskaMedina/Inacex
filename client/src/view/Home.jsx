import Carousel from '../components/Carousel/Carousel.jsx';
import ListCourses from '../components/CardCourses/ListCourses.jsx';
// import Facebook from '../components/SectionFacebook/Facebook.jsx';
import Tips from '../components/Tips/Tips.jsx';

export const Home = () => {
  
  return (
    <>
      <Carousel />
      <ListCourses />
      {/* <Facebook /> */}
      <Tips />
    </>
  )
}

export default Home;