import ParabrisasCabina from '../components/Cabina/ParabrisasCabina';
import Metodologia from '../components/Cabina/Metodologia'

function Cabina() {
  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden' }}>
      <ParabrisasCabina image="./imgCursos/horquilla.jpg" />
      <Metodologia />
    </div>
    </>
  );
}
export default Cabina;
