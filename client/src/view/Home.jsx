import Carousel from '../components/Carousel/Carousel.jsx';
import ListCourses from '../components/CardCourses/ListCourses.jsx';
import Facebook from '../components/SectionFacebook/Facebook.jsx';
import Tips from '../components/Tips/Tips.jsx';
import FormularioInacex from '../components/Formulary/FormularioInacex.jsx';
import CatSimulator from '../components/CatSimulator/CatSimulator.jsx';

export const Home = () => {
  const image= "./imgCursos/caex/caexForms.webp"
  return (
    <>
      <Carousel />
      <ListCourses />
      <CatSimulator />
      <Tips />
      <Facebook />
      <FormularioInacex image={image}/>
    </>
  )
}

export default Home;