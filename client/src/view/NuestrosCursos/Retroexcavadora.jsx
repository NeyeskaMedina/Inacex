import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Formulary/FormularioInacex';
import iconsRetro from '../../components/Cabina/Metodologia/icons/iconsRetro'
import infoRetro from '../../components/Cabina/Requisitos/Info/InfoRetro';

function Retroexcavadora() {
  const image = "./imgCursos/retro/retro.jpg";
  const imageCab = "./imgCursos/retro/retroCabina.jpg";
  const imgForms = './imgCursos/retro/retro.jpg';
  const bgColor = 'var(--verde-trans)';
  const font = 'black';
  const viewIzq = '500% 200%'
  const viewDer = '500% 200%'
  const viewCentXS = '100% 100%'
  const viewCentMD = '100% 160%'

  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina image={imageCab} viewIzq={viewIzq} viewDer={viewDer} viewCentXS={viewCentXS} viewCentMD={viewCentMD}/>
    </div>
    <Metodologia icons={iconsRetro} />
    <Requisitos image={image} requisitos={infoRetro} colorIcon={'var(--naranja-cat)'}/>
    <FormularioInacex image={imgForms} bgColor={bgColor} font={font}/>
    </>
  );
}
export default Retroexcavadora;
