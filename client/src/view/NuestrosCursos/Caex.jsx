import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Formulary/FormularioInacex';
import iconsCaex from '../../components/Cabina/Metodologia/icons/iconsCaex'
import infoCaex from '../../components/Cabina/Requisitos/Info/InfoCaex';
import Advances from '../../components/Advances/Advances';

function Caex() {
  const imageAdvances = "./imgCursos/caex/caexAdvances.png"
  const image = "./imgCursos/caex/caex-cab.png";
  const req = "./imgCursos/caex/caex-cat.png"
  const imgForms = './imgCursos/caex/caex-cat.png'
   const bgColor = 'var(--verde-trans)';
  const font = 'white';
  const viewIzq = '1000% 110%'
  const viewDer = '700% 100%'
  const viewCentXS = '250% 100%'
  const viewCentMD = '110% 110%'

  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina image={image} viewIzq={viewIzq} viewDer={viewDer} viewCentXS={viewCentXS} viewCentMD={viewCentMD} />
    </div>
    <Metodologia icons={iconsCaex} />
    <Requisitos image={req} requisitos={infoCaex} colorIcon={'var(--verde-inacex)'}/>
    <Advances image={imageAdvances} />
    <FormularioInacex image={imgForms} bgColor={bgColor} font={font} />
    </>
  );
}
export default Caex;
