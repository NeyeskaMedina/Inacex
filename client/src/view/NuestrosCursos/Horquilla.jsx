import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsHorquilla from '../../components/Cabina/Metodologia/icons/iconsHorquilla'
import infoHorquilla from '../../components/Cabina/Requisitos/Info/InfoHorquilla';
import PricingCards from '../../components/Generals/Plain/PricingCards';

function Horquilla() {
  const plans = [
    {
      title: 'CAMIÓN EXTRACCIÓN + GRÚA HORQUILLA',
      subtitle: 'Programa especial',
      price: '$454.000',
      features: ['4 Maquinaria', 'Modalidad Online-Zoom / E-learning', '4 meses de duración', 'Soporte al alumno', 'Certificación digital','Instructores especializados', 'Bolsa de trabajo', 'Practicas en terreno', 'Practicatest'],
      foo: 'El valor PAGO ÚNICO y todos los beneficios del programa seleccionado.',
    },
    {
      title: 'OPERACIÓN SEGURA DE GRÚA HORQUILLA',
      subtitle: 'Programa único',
      price: '$140.000',
      features: ['1 Maquinaria', 'Modalidad E-Learning', '2 meses de duración', 'Soporte al alumno', 'Certificación digital', 'Certificación impresa', 'Bolsa de trabajo', 'Practicas en terreno', 'Practicatest'],
      foo: 'El valor es PAGO ÚNICO e incluye todos los beneficios del programa seleccionado.',
      highlighted: true,
    },
    {
      title: 'RETROEXCAVADORA + GRÚA HORQUILLA',
      subtitle: 'Programa duo',
      price: '$290.000',
      features: ['2 Maquinaria', 'Modalidad E-Learning', '2 meses de duración', 'Soporte al alumno', 'Certificación digital', 'Certificación impresa',  'Bolsa de trabajo', 'Practicas en terreno', 'Practicatest'],
      foo: 'El valor es PAGO ÚNICO y todos los beneficios del programa seleccionado.',
    },
  ];


  const image = "./imgCursos/horquilla/horquillaIA.jpg";
  const imageCab= "./imgCursos/horquilla/horquilla.jpg";
  const imgForms = './imgCursos/horquilla/horquillaForms.jpg';
  const color = 'var(--naranja-oscuro)';
  const colorInacex = 'var(--verde-inacex)';
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
    <PricingCards plans={plans} color={color} colorInacex={colorInacex} />
    <FormularioInacex image={imgForms} bgColor={bgColor} font={font} />
    </>
  );
}
export default Horquilla;
