import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Formulary/FormularioInacex';
import iconsCaex from '../../components/Cabina/Metodologia/icons/iconsCaex'
import infoCaex from '../../components/Cabina/Requisitos/Info/InfoCaex';

function Caex() {
  const image = "./imgCarousel/930e-komatsu.png";
  const imgForms = './imgCursos/caex.png'
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina image={image} />
    </div>
    <Metodologia icons={iconsCaex} />
    <Requisitos image={image} requisitos={infoCaex} />
    <FormularioInacex image={imgForms} />
    </>
  );
}
export default Caex;
