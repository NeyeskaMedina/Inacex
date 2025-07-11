import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsFrontal from '../../components/Cabina/Metodologia/icons/iconsFrontal';
import infoFrontal from '../../components/Cabina/Requisitos/Info/InfoFrontal';
import Advances from '../../components/Main/Advances/Advances';
import PricingCards from '../../components/Generals/Plain/PricingCards';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { getPlansByNumber } from '../../utils/utils';
import { programas } from '../../utils/programas';

function CargadorFrontal() {
    const { cabinaRef } = useContext(UserContext);
  const groupPlans = getPlansByNumber(programas, 4);

  const image = "./imgCursos/frontal/frontal.png";
  const imageCab= "./imgCursos/frontal/frontal3.png";
  const imgForms = './imgCursos/frontal/26.png';
  const imageAdvances = './imgCursos/frontal/26.png';
  const imagePlans = './imgCursos/frontal/12.png';
  const bgColor = 'var(--verde-trans)';
  const color = 'var(--naranja-oscuro)';
  const colorInacex = 'var(--verde-inacex)';
  const font = 'white';
  const viewIzq = '450% 100%'
  const viewDer = '450% 100%'
  const viewCentXS = '100% 100%'
  const viewCentMD = '110% 110%'
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina 
          image={imageCab} 
          viewIzq={viewIzq} 
          viewDer={viewDer} 
          viewCentXS={viewCentXS} 
          viewCentMD={viewCentMD}
          refProp={cabinaRef} 
      />
    <Metodologia 
        targetRef={cabinaRef} 
        icons={iconsFrontal} 
    />
    </div>
    <Requisitos 
        image={image} 
        requisitos={infoFrontal} 
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
export default CargadorFrontal;
