export const sedes = [
  'Antofagasta', 'Arica', 'Calama', 'Concepción', 'Copiapó',
  'Iquique', 'Ovalle', 'Rancagua', 'Serena', 'Viña del mar'
].sort();

export const cursos = [
  'CAMIÓN EXTRACCIÓN de alto tonelaje',
  'Operación segura de GRÚA HORQUILLA',
  'Operación segura de RETROEXCAVADORA',
  'Operación segura de BULLDOZER',
  'Operación segura de MOTONIVELADORA',
  'Operación segura de CARGADOR FRONTAL'
];

export const validateEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email); 
    };

export const validateRUT = (rut) => {
  rut = rut.replace(/\./g, '').replace('-', '');
  if (rut.length < 8) return false;
  let body = rut.slice(0, -1);
  let dv = rut.slice(-1).toUpperCase();
  let sum = 0, mul = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += +body[i] * mul;
    mul = mul === 7 ? 2 : mul + 1;
  }
  let expectedDV = 11 - (sum % 11);
  expectedDV = expectedDV === 11 ? '0' : expectedDV === 10 ? 'K' : expectedDV.toString();
  return dv === expectedDV;
};


export default {
    sedes,
    cursos,
    validateEmail,
    validateRUT
}