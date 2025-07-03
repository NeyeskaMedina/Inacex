import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsBull from '../../components/Cabina/Metodologia/icons/iconsBull'
import infoBull from '../../components/Cabina/Requisitos/Info/InfoBull';
import Advances from '../../components/Main/Advances/Advances';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { plans } from '../../utils/utils';
import PricingCards from '../../components/Generals/Plain/PricingCards';

function Bulldozer() {
  const { cabinaRef } = useContext(UserContext);
  const imageAdvances = "./imgCursos/bull/bull2.png"
  const image = "./imgCursos/bull/bull1.png";
  const req = "./imgCursos/bull/bull2.png"
  const imgForms = './imgCursos/bull/bull4.png'
  const bgColor = 'var(--verde-trans)';
  const font = 'white';
  const viewIzq = '400% 110%';
  const viewDer = '400% 100%';
  const viewCentXS = '100% 100%';
  const viewCentMD = '100% 100%';
  const colorInacex = 'var(--verde-inacex)';
  const color = 'white';
  const imagePlans = "./imgCursos/bull/bull13.png";

  const groupPlans = plans[4];
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina 
          image={image} 
          viewIzq={viewIzq} 
          viewDer={viewDer} 
          viewCentXS={viewCentXS} 
          viewCentMD={viewCentMD} 
          refProp={cabinaRef}
      />
    </div>
    <Metodologia 
        targetRef={cabinaRef}
        icons={iconsBull} 
    />
    <Requisitos 
        image={req} 
        requisitos={infoBull} 
        colorIcon={'var(--verde-icons)'}
    />
    <PricingCards 
        plans={groupPlans} 
        color={color} 
        colorInacex={colorInacex} 
        image={imagePlans}
    />
    <Advances 
        image={imageAdvances} 
    />
    <FormularioInacex 
        image={imgForms} 
        bgColor={bgColor} 
        font={font} 
    />
    </>
  );
}
export default Bulldozer;
