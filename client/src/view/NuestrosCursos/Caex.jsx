import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Formulary/FormularioInacex';
import iconsCaex from '../../components/Cabina/Metodologia/icons/iconsCaex'
import infoCaex from '../../components/Cabina/Requisitos/Info/InfoCaex';

function Caex() {
  const image = "./imgCursos/caex/797f.jpg";
  const req = "./imgCursos/caex/caex-cat.jpg"
  const imgForms = './imgCursos/caex/caex-cat.jpg'
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina image={image} />
    </div>
    <Metodologia icons={iconsCaex} />
    <Requisitos image={req} requisitos={infoCaex} />
    <FormularioInacex image={imgForms} />
    </>
  );
}
export default Caex;
