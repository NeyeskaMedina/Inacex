import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsFrontal from '../../components/Cabina/Metodologia/icons/iconsFrontal'
import infoFrontal from '../../components/Cabina/Requisitos/Info/InfoFrontal';
// import PricingCards from '../../components/Generals/Plain/PricingCards';

function Cargador() {
  const image = "./imgCursos/frontal/frontal.png";
  const imageCab= "./imgCursos/frontal/26.png";
  const imgForms = './imgCursos/frontal/frontal3.png'
  const bgColor = 'var(--verde-trans)';
  const font = 'white';
  const viewIzq = '450% 130%'
  const viewDer = '450% 130%'
  const viewCentXS = '100% 100%'
  const viewCentMD = '135% 135%'
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina image={imageCab} viewIzq={viewIzq} viewDer={viewDer} viewCentXS={viewCentXS} viewCentMD={viewCentMD}/>
    </div>
    <Metodologia icons={iconsFrontal} />
    <Requisitos image={image} requisitos={infoFrontal} colorIcon={'var(--verde-icons)'}/>
    {/* <PricingCards /> */}
    <FormularioInacex image={imgForms} bgColor={bgColor} font={font} />
    </>
  );
}
export default Cargador;
