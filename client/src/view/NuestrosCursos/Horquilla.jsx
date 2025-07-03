import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsHorquilla from '../../components/Cabina/Metodologia/icons/iconsHorquilla'
import infoHorquilla from '../../components/Cabina/Requisitos/Info/InfoHorquilla';
import Advances from '../../components/Main/Advances/Advances';
import PricingCards from '../../components/Generals/Plain/PricingCards';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { plans } from '../../utils/utils';

function Horquilla() {
  const { cabinaRef } = useContext(UserContext);
  const groupPlans = plans[2];



  const image = "./imgCursos/horquilla/horquillaIA.jpg";
  const imageCab= "./imgCursos/horquilla/horquilla.jpg";
  const imgForms = './imgCursos/horquilla/horquillaForms.jpg';
  const imagePlans = './imgCursos/horquilla/horquillaPlans.jpg';
  const imageAdvances = './imgCursos/horquilla/horquillaAdvance.jpg';
  const color = 'var(--naranja-oscuro)';
  const colorInacex = 'var(--verde-inacex)';
  const bgColor = 'var(--bg-transp-forms)';
  const font = 'black';
  const viewIzq = '450% 100%'
  const viewDer = '450% 100%'
  const viewCentXS = '250% 100%'
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
    </div>
    <Metodologia 
        targetRef={cabinaRef} 
        icons={iconsHorquilla} />
    <Requisitos 
        image={image} 
        requisitos={infoHorquilla} 
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
export default Horquilla;
