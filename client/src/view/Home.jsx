import Carousel from '../components/Carousel/Carousel.jsx';
import ListCourses from '../components/Main/CardCourses/ListCourses.jsx';
// import Facebook from '../components/Main/SectionFacebook/Facebook.jsx';
import Videos from '../components/Generals/Videos/Videos.jsx'
import Tips from '../components/Main/Tips/Tips.jsx';
import FormularioInacex from '../components/Generals/Formulary/FormularioInacex.jsx';
import CatSimulator from '../components/Main/CatSimulator/CatSimulator.jsx';
import Advances from '../components/Main/Advances/Advances.jsx';

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
      <Videos />
      <FormularioInacex image={image} bgColor={bgColor} font={font}/>
    </>
  )
}

export default Home;