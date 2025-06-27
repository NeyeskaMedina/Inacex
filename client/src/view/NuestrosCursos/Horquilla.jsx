import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsHorquilla from '../../components/Cabina/Metodologia/icons/iconsHorquilla'
import infoHorquilla from '../../components/Cabina/Requisitos/Info/InfoHorquilla';

function Horquilla() {
  const image = "./imgCursos/horquilla/horquillaIA.jpg";
  const imageCab= "./imgCursos/horquilla/horquilla.jpg";
  const imgForms = './imgCursos/horquilla/horquillaForms.jpg'
  const bgColor = 'var(--bg-transp-forms)';
  const font = 'black';
  const viewIzq = '450% 100%'
  const viewDer = '450% 100%'
  const viewCentXS = '250% 100%'
  const viewCentMD = '110% 110%'
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina image={imageCab} viewIzq={viewIzq} viewDer={viewDer} viewCentXS={viewCentXS} viewCentMD={viewCentMD}/>
    </div>
    <Metodologia icons={iconsHorquilla} />
    <Requisitos image={image} requisitos={infoHorquilla} colorIcon={'var(--verde-icons)'}/>
    <FormularioInacex image={imgForms} bgColor={bgColor} font={font} />
    </>
  );
}
export default Horquilla;
