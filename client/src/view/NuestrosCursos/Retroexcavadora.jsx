import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Formulary/FormularioInacex';
import iconsRetro from '../../components/Cabina/Metodologia/icons/iconsRetro'
import infoRetro from '../../components/Cabina/Requisitos/Info/InfoRetro';

function Retroexcavadora() {
  const image = "./imgCursos/retro/retro.jpg";
  const imgForms = './imgCursos/retro/retro.jpg'
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina image="./imgCursos/retro/retroCabina.jpg" />
    </div>
    <Metodologia icons={iconsRetro} />
    <Requisitos image={image} requisitos={infoRetro} />
    <FormularioInacex image={imgForms} />
    </>
  );
}
export default Retroexcavadora;
