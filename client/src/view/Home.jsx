import Carousel from '../components/Carousel/Carousel.jsx';
import ListCourses from '../components/CardCourses/ListCourses.jsx';
// import Facebook from '../components/SectionFacebook/Facebook.jsx';
import Tips from '../components/Tips/Tips.jsx';
import FormularioInacex from '../components/Formulary/FormularioInacex.jsx';

export const Home = () => {
  
  return (
    <>
      <Carousel />
      <ListCourses />
      {/* <Facebook /> */}
      <Tips />
      <FormularioInacex />
    </>
  )
}

export default Home;