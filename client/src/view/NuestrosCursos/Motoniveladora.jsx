import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import PricingCards from '../../components/Generals/Plain/PricingCards';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsMoto from '../../components/Cabina/Metodologia/icons/iconsMoto'
import infoMoto from '../../components/Cabina/Requisitos/Info/InfoMoto';
import Advances from '../../components/Main/Advances/Advances';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { getPlansByNumber } from '../../utils/utils';
import { programas } from '../../utils/programas';

function Motoniveladora() {
  const groupPlans = getPlansByNumber(programas, 5);

  const { cabinaRef } = useContext(UserContext);
  const imageAdvances = "./imgCursos/moto/moto12.png"
  const imagePlans = './imgCursos/moto/moto1.png';
  const image = "./imgCursos/moto/moto2.png";
  const req = "./imgCursos/moto/moto1.png"
  const imgForms = './imgCursos/moto/moto3.png'
   const bgColor = 'var(--verde-trans)';
  const font = 'white';
  const viewIzq = '400% 110%'
  const viewDer = '400% 100%'
  const viewCentXS = '100% 100%'
  const viewCentMD = '100% 100%'
  const color = 'var(--naranja-oscuro)';
  const colorInacex = 'var(--verde-inacex)';

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
        icons={iconsMoto} 
    />
    <Requisitos 
        image={req} 
        requisitos={infoMoto} 
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
export default Motoniveladora;
