export const sedes = [
  'Antofagasta', 'Arica', 'Calama', 'Concepción', 'Copiapó',
  'Iquique', 'Ovalle', 'Rancagua', 'Serena', 'Viña del mar'
].sort();

export const cursos = [
  'CAMIÓN EXTRACCIÓN de alto tonelaje + GRÚA HORQUILLA',
  'Operación segura de GRÚA HORQUILLA',
  'Operación segura de RETROEXCAVADORA',
  'Operación segura de RETROEXCAVADORA + GRÚA HORQUILLA',
  'Operación segura de BULLDOZER',
  'Operación segura de MOTONIVELADORA',
  'Operación segura de CARGADOR FRONTAL'
];

export const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email); 
    };

export const validateRUT = (rut) => {
  // Validar formato: números (0-9) antes del guion, seguido por un guion y un dígito verificador (0-9 o K/k)
  const regex = /^[0-9]{7,8}-[0-9Kk]$/;
  if (!regex.test(rut)) return false;

  // Separar cuerpo y dígito verificador
  const [body, dv] = rut.split('-');
  let sum = 0;
  let multiplier = 2;

  // Calcular la suma según el algoritmo de RUT
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body.charAt(i), 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const expectedDV = 11 - (sum % 11);
  const computedDV = expectedDV === 11 ? '0' : expectedDV === 10 ? 'K' : expectedDV.toString();

  return dv.toUpperCase() === computedDV;
};
export const plans = {
  // CARGADOR FRONTAL
  1: [
    {
      title: 'CAMIÓN EXTRACCIÓN + ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa especial',
      other: 'Matrícula',
      price: '$70.000',
      features: 
        [
          '5 Maquinarias', 
          'Modalidad Online-Zoom', 
          '4 meses de duración',
          'Clases 2 veces por semana', 
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación digital',
          'Certificación indefinida',
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor INCLUYE MATRÍCULA y todos los beneficios del programa seleccionado.',
    },
    {
      title: 'OPERACIÓN SEGURA DE ',
      nexo: 'CARGADOR FRONTAL',
      subtitle: 'Programa único',
      other: 'Matrícula',
      price: '$210.000',
      features: 
        [
          '1 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Clases a tu ritmo', 
          'Soporte al alumno',
          'Campus virtual',
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor es PAGO ÚNICO e incluye todos los beneficios del programa seleccionado.',
      highlighted: true,
    },
    {
      title: 'MOTONIVELADORA + ',
      nexo: 'BULLDOZER',
      subtitle: 'Programa duo',
      other: '$550.000',
      price: '$425.000',
      features: 
        [
          '2 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Clases a tu ritmo',
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado',  
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor es PAGO ÚNICO e incluye matrícula y todos los beneficios del programa seleccionado.',
    }
  ],
  // GRÚA HORQUILLA
  2: [
    {
      title: 'CAMIÓN EXTRACCIÓN + ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa especial',
      other: 'Matrícula',
      price: '$70.000',
      features: 
        [
          '5 Maquinarias', 
          'Modalidad Online-Zoom', 
          '4 meses de duración',
          'Clases 2 veces por semana', 
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación digital',
          'Certificación indefinida',
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor INCLUYE MATRÍCULA y todos los beneficios del programa seleccionado.',
    },
    {
      title: 'OPERACIÓN SEGURA DE ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa único',
      other: 'Matrícula',
      price: '$90.000',
      features: 
        [
          '1 Maquinaria', 
          'Modalidad Online-Zoom', 
          '1 meses de duración', 
          'Clases 2 veces por semana', 
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor sólo INCLUYE MATRÍCULA y todos los beneficios del programa seleccionado.',
      highlighted: true,
    },
    {
      title: 'OPERACIÓN SEGURA DE ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa único',
      other: '$250.000',
      price: '$140.000',
      features: 
        [
          '1 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Clases a tu ritmo', 
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor sólo INCLUYE MATRÍCULA y todos los beneficios del programa seleccionado.',
    },
    {
      title: 'RETROEXCAVADORA + ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa duo',
      other: '$330.000',
      price: '$290.000',
      features: 
        [
          '2 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Clases a tu ritmo',
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor es PAGO ÚNICO e incluye matrícula y todos los beneficios del programa seleccionado.',
    },
  ],
  // CAEX - CAMIÓN DE EXTRACCIÓN
  3: [
    {
      title: 'OPERACIÓN SEGURA DE ',
      nexo: 'CAMIÓN EXTRACCIÓN',
      subtitle: 'Programa duo',
      other: '$400.000',
      price: '$250.000',
      features: 
        [
          '2 Maquinaria', 
          '2 Caterpillar (797F y 793F)',
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Clases 2 veces por semana', 
          'Soporte al alumno',
          'Campus virtual', 
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas CatSimulator', 
          'Practicatest'
        ],
      foo: 'El valor sólo INCLUYE MATRÍCULA y todos los beneficios del programa seleccionado.',
    },
    {
      title: 'CAMIÓN EXTRACCIÓN + ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa especial',
      other: 'Matrícula',
      price: '$70.000',
      features: 
        [
          '5 Maquinarias', 
          '2 Caterpilar (797F y 793F)',
          '2 Komatsu (930E y 830E)',
          '1 Grua horquilla',
          'Modalidad Online-Zoom', 
          '4 meses de duración',
          'Clases 2 veces por semana', 
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación digital',
          'Certificación indefinida',
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor INCLUYE MATRÍCULA y todos los beneficios del programa seleccionado.',
      highlighted: true,
    },
    {
      title: 'RETROEXCAVADORA + ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa duo',
      other: '$330.000',
      price: '$290.000',
      features: 
        [
          '2 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Clases a tu ritmo',
          'Soporte al alumno', 
          'Certificación digital', 
          'Certificación indefinida', 
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor es PAGO ÚNICO y todos los beneficios del programa seleccionado.',
    },
  ],
  // BULLDOZER
  4: [
    {
      title: 'CAMIÓN EXTRACCIÓN + ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa especial',
      other: 'Matrícula',
      price: '$70.000',
      features: 
        [
          '5 Maquinarias', 
          'Modalidad Online-Zoom', 
          '4 meses de duración',
          'Clases 2 veces por semana', 
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación digital',
          'Certificación indefinida',
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor INCLUYE MATRÍCULA y todos los beneficios del programa seleccionado.',
    },
    {
      title: 'OPERACIÓN SEGURA DE BULLDOZER',
      nexo: 'BULLDOZER',
      subtitle: 'Programa único',
      other: '$380.000',
      price: '$250.000',
      features: 
        [
          '1 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Campus virtual',
          'Clases a tu ritmo', 
          'Soporte al alumno', 
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor es PAGO ÚNICO e incluye matrícula y todos los beneficios del programa seleccionado.',
      highlighted: true,
    },
    {
      title: 'MOTONIVELADORA + ',
      nexo: 'BULLDOZER',
      subtitle: 'Programa duo',
      other: '$550.000',
      price: '$425.000',
      features: 
        [
          '2 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Clases a tu ritmo',
          'Soporte al alumno',
          'Campus virtual', 
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado',  
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor es PAGO ÚNICO e incluye matrícula y todos los beneficios del programa seleccionado.',
    }
  ],
  // MOTONIVELADORA
  5: [
    {
      title: 'CAMIÓN EXTRACCIÓN + ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa especial',
      other: 'Matrícula',
      price: '$70.000',
      features: 
        [
          '5 Maquinarias', 
          'Modalidad Online-Zoom', 
          '4 meses de duración',
          'Clases 2 veces por semana', 
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación digital',
          'Certificación indefinida',
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor PAGO ÚNICO y todos los beneficios del programa seleccionado.',
    },
    {
      title: 'OPERACIÓN SEGURA DE ',
      nexo: 'MOTONIVELADORA',
      subtitle: 'Programa único',
      other: '$350.000',
      price: '$250.000',
      features: 
        [
          '1 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Campus virtual',
          'Clases a tu ritmo', 
          'Soporte al alumno', 
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor es PAGO ÚNICO e incluye todos los beneficios del programa seleccionado.',
      highlighted: true,
    },
    {
      title: 'MOTONIVELADORA + ',
      nexo: 'BULLDOZER',
      subtitle: 'Programa duo',
      other: '$550.000',
      price: '$425.000',
      features: 
        [
          '2 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Clases a tu ritmo',
          'Soporte al alumno',
          'Campus virtual', 
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado',  
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor es PAGO ÚNICO e incluye matrícula y todos los beneficios del programa seleccionado.',
    },
  ],
  6: [
  // RETROEXCAVADORA
  {
      title: 'CAMIÓN EXTRACCIÓN + ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa especial',
      other: 'Matrícula',
      price: '$70.000',
      features: 
        [
          '5 Maquinarias', 
          'Modalidad Online-Zoom', 
          '4 meses de duración',
          'Clases 2 veces por semana', 
          'Soporte al alumno', 
          'Campus virtual',
          'Certificación digital',
          'Certificación indefinida',
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor PAGO ÚNICO y todos los beneficios del programa seleccionado.',
    },
    {
      title: 'OPERACIÓN SEGURA DE ',
      nexo: 'RETROEXCAVADORA',
      subtitle: 'Programa único',
      other: 'Matrícula',
      price: 'Subvencionado',
      features: 
        [
          '1 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Campus virtual',
          'Clases a tu ritmo', 
          'Soporte al alumno', 
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado', 
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
        ],
      foo: 'El valor es PAGO ÚNICO e incluye todos los beneficios del programa seleccionado.',
      highlighted: true,
    },
    {
      title: 'RETROEXCAVADORA + ',
      nexo: 'GRÚA HORQUILLA',
      subtitle: 'Programa duo',
      other: 'Matrícula',
      price: 'Subvencionado',
      features: [
          '2 Maquinaria', 
          'Modalidad E-Learning', 
          '2 meses de duración', 
          'Clases a tu ritmo',
          'Soporte al alumno',
          'Campus virtual', 
          'Certificación impresa y digital', 
          'Certificación indefinida', 
          'Instructor especializado',  
          'Bolsa de trabajo', 
          'Practicas en terreno', 
          'Practicatest'
      ],
      foo: 'El valor es PAGO ÚNICO y todos los beneficios del programa seleccionado.',
    },
  ]
};

// utils/programUtils.js

export const getPlansByNumber = (programas, planNumber) => {
  const allPrograms = [];

  Object.values(programas).forEach((secciones) => {
    secciones.forEach((bloque) => {
     Object.values(bloque).forEach((subcategorias) => {
     // Aquí subcategorias es un objeto, entonces hacemos:
     Object.values(subcategorias).forEach((itemsArray) => {
       itemsArray.forEach((item) => {
         if (item.active && item.plan === planNumber) {
           allPrograms.push(item);
         }
       });
     });
    });
    });
  });

  return allPrograms;
};





export default {
    sedes,
    cursos,
    plans,
    getPlansByNumber,
    validateEmail,
    validateRUT
}