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


export default {
    sedes,
    cursos,
    validateEmail,
    validateRUT
}