import Carousel from '../components/Carousel/Carousel.jsx';
import ListCourses from '../components/CardCourses/ListCourses.jsx';
import Facebook from '../components/SectionFacebook/Facebook.jsx';
import Tips from '../components/Tips/Tips.jsx';
import FormularioInacex from '../components/Formulary/FormularioInacex.jsx';
import CatSimulator from '../components/CatSimulator/CatSimulator.jsx';

export const Home = () => {
  const image= "./imgCursos/caex/caexForms.webp"
  const bgColor = 'var(--verde-trans)';
  const font = 'white';

  return (
    <>
      <Carousel />
      <ListCourses />
      <CatSimulator />
      <Tips />
      <Facebook />
      <FormularioInacex image={image} bgColor={bgColor} font={font}/>
    </>
  )
}

export default Home;