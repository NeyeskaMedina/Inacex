import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsRetro from '../../components/Cabina/Metodologia/icons/iconsRetro'
import PricingCards from '../../components/Generals/Plain/PricingCards';
import infoRetro from '../../components/Cabina/Requisitos/Info/InfoRetro';
import Advances from '../../components/Main/Advances/Advances';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { plans } from '../../utils/utils';


function Retroexcavadora() {
  const { cabinaRef } = useContext(UserContext);
  const groupPlans = plans[6];

  const imageReq = "./imgCursos/retro/retro.jpg";
  const imageCab = "./imgCursos/retro/retro2.jpg";
  const imgForms = './imgCursos/retro/retro.jpg';
  const imageAdvances = './imgCursos/retro/11.jpg'
  const imagePlans = './imgCursos/retro/3.jpg';
  const bgColor = 'var(--verde-trans)';
  const font = 'black';
  const color = 'var(--naranja-oscuro)';
  const colorInacex = 'var(--verde-inacex)';
  const viewIzq = '300% 160%';
  const viewDer = '300% 160%';
  const viewCentXS = '100% 100%';
  const viewCentMD = '100% 160%';

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
        icons={iconsRetro} 
    />
    <Requisitos 
        image={imageReq} 
        requisitos={infoRetro} 
        colorIcon={'var(--naranja-cat)'}
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
export default Retroexcavadora;
