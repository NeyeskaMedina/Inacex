import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Formulary/FormularioInacex';
import iconsHorquilla from '../../components/Cabina/Metodologia/icons/iconsHorquilla'
import infoHorquilla from '../../components/Cabina/Requisitos/Info/InfoHorquilla';

function Horquilla() {
  const image = "./imgCursos/horquilla/horquillaIA.jpg";
  const imgForms = './imgCursos/horquilla/horquillaForms.jpg'
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina image="./imgCursos/horquilla/horquilla.jpg" />
    </div>
    <Metodologia icons={iconsHorquilla} />
    <Requisitos image={image} requisitos={infoHorquilla} />
    <FormularioInacex image={imgForms} />
    </>
  );
}
export default Horquilla;
