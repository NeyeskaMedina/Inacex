import Carousel from '../components/Carousel/Carousel.jsx';
import ListCourses from '../components/CardCourses/ListCourses.jsx';
import Facebook from '../components/SectionFacebook/Facebook.jsx';
import Tips from '../components/Tips/Tips.jsx';
import FormularioInacex from '../components/Formulary/FormularioInacex.jsx';
import CatSimulator from '../components/CatSimulator/CatSimulator.jsx';
import Advances from '../components/Advances/Advances';

export const Home = () => {
  const imageAdvances  = './imgCursos/caex/caexAdvances.png'
  const image= "./imgCursos/caex/caexForms.webp"
  const bgColor = 'var(--verde-trans)';
  const font = 'white';

  return (
    <>
      <Carousel />
      <ListCourses />
      <Advances image={imageAdvances}/>
      <CatSimulator />
      <Tips />
      <Facebook />
      <FormularioInacex image={image} bgColor={bgColor} font={font}/>
    </>
  )
}

export default Home;