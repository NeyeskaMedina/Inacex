import { programas } from '../utils/programas';

export const obtenerProgramasActivos = (categoria) => {
  if (!programas[categoria]) return {};

  return Object.entries(programas[categoria]).reduce((acc, [key, cursos]) => {
    const activos = cursos.filter((curso) => curso.active);
    if (activos.length > 0) acc[key] = activos;
    return acc;
  }, {});
};
export const obtenerProgramasActivosDirecto = (grupos) => {
  return Object.entries(grupos).reduce((acc, [key, cursos]) => {
    const activos = cursos.filter((curso) => curso.active);
    if (activos.length > 0) acc[key] = activos;
    return acc;
  }, {});
};


export const obtenerNombreCategoria = (categoria) => {
  switch (categoria) {
    case 'caex':
      return 'CAMIÓN EXTRACCIÓN DE ALTO TONELAJE';
    case 'grua':
      return 'OPERACIÓN SEGURA DE GRÚA HORQUILLA';
    default:
      return categoria.toUpperCase().replace(/_/g, ' ');
  }
};

export const imagenesCategorias = (categoria) => {
  switch (categoria) {
    case 'caex':
      return './imgCursos/caex/caex-bg.png';
    case 'grua':
      return './imgCursos/horquilla/horquilla-bg.png';
    default:
      return categoria.toUpperCase().replace(/_/g, ' ');
  }
};