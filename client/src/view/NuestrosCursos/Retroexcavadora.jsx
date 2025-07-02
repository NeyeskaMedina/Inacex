import ParabrisasCabina from '../../components/Cabina/ParabrisasCabina';
import Metodologia from '../../components/Cabina/Metodologia/Metodologia';
import Requisitos from '../../components/Cabina/Requisitos/Requisitos';
import FormularioInacex from '../../components/Generals/Formulary/FormularioInacex';
import iconsRetro from '../../components/Cabina/Metodologia/icons/iconsRetro'
import PricingCards from '../../components/Generals/Plain/PricingCards';
import infoRetro from '../../components/Cabina/Requisitos/Info/InfoRetro';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Retroexcavadora() {
  const { cabinaRef } = useContext(UserContext);
  const plans = [
    {
      title: 'CAMIÓN EXTRACCIÓN + GRÚA HORQUILLA',
      subtitle: 'Programa especial',
      price: '$454.000',
      features: ['4 Maquinaria', 'Modalidad Online-Zoom / E-learning', '4 meses de duración', 'Soporte al alumno', 'Certificación digital','Instructores especializados', 'Bolsa de trabajo', 'Practicas en terreno', 'Practicatest'],
      foo: 'El valor PAGO ÚNICO y todos los beneficios del programa seleccionado.',
    },
    {
      title: 'OPERACIÓN SEGURA DE RETROEXCAVADORA',
      subtitle: 'Programa único',
      price: '$176.000',
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

  const image = "./imgCursos/retro/retro.jpg";
  const imageCab = "./imgCursos/retro/retro2.jpg";
  const imgForms = './imgCursos/retro/retro.jpg';
  const imagePlans = './imgCursos/retro/11.jpg';
  const bgColor = 'var(--verde-trans)';
  const font = 'black';
  const color = 'var(--naranja-oscuro)';
  const colorInacex = 'var(--verde-inacex)';
  const viewIzq = '300% 160%';
  const viewDer = '300% 160%';
  const viewCentXS = '100% 100%';
  const viewCentMD = '100% 160%';

  return (
    <>
    <div style={{ backgroundColor: '#121212', maxHeight: '100vh', maxWidth: '100vw', overflow: 'hidden', position: 'relative' }}>
      <ParabrisasCabina 
          image={imageCab} 
          viewIzq={viewIzq} 
          viewDer={viewDer} 
          viewCentXS={viewCentXS} 
          viewCentMD={viewCentMD} 
          refProp={cabinaRef}
      />  
    </div>
    <Metodologia 
        targetRef={cabinaRef} 
        icons={iconsRetro} 
    />
    <Requisitos image={image} requisitos={infoRetro} colorIcon={'var(--naranja-cat)'}/>
    <PricingCards plans={plans} color={color} colorInacex={colorInacex} image={imagePlans} />
    <FormularioInacex image={imgForms} bgColor={bgColor} font={font}/>
    </>
  );
}
export default Retroexcavadora;
