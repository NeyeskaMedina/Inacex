import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos';

function Horquilla() {
  const image = "./imgCursos/horquillaIA.jpg";
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina image="./imgCursos/horquilla.jpg" />
    </div>
    <Metodologia />
    <Requisitos image={image} />
    </>
  );
}
export default Horquilla;
