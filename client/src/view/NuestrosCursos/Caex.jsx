import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsCaex from '../../components/Cabina/Metodologia/icons/iconsCaex'
import infoCaex from '../../components/Cabina/Requisitos/Info/InfoCaex';
import PricingCards from '../../components/Generals/Plain/PricingCards';
import Advances from '../../components/Main/Advances/Advances';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { plans } from '../../utils/utils'; 

function Caex() {
  const { cabinaRef } = useContext(UserContext);
  const imageAdvances = "./imgCursos/caex/caexAdvances.png"
  const imagePlans = "./imgCursos/caex/caex-cat.png";
  const image = "./imgCursos/caex/caex-cab.png";
  const req = "./imgCursos/caex/caex-cat.png"
  const imgForms = './imgCursos/caex/caex-cat.png'
  const bgColor = 'var(--verde-trans)';
  const color = 'var(--naranja-oscuro)';
  const colorInacex = 'var(--verde-inacex)';
  const font = 'white';
  const viewIzq = '1000% 110%'
  const viewDer = '700% 100%'
  const viewCentXS = '250% 100%'
  const viewCentMD = '110% 110%'

  const groupPlans = plans[3];

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
        icons={iconsCaex} 
    />
    <Requisitos 
        image={req} 
        requisitos={infoCaex} 
        colorIcon={'var(--verde-icons)'}
    />
    <Advances 
        image={imageAdvances} 
    />
    <PricingCards 
        plans={groupPlans} 
        color={color} 
        colorInacex={colorInacex} 
        image={imagePlans}  
    />
    <FormularioInacex 
        image={imgForms} 
        bgColor={bgColor} 
        font={font} 
    />
    </>
  );
}
export default Caex;
