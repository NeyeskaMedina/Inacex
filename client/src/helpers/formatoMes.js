export const formatoMes = () => {
  const fecha = new Date();
  const mes = fecha.toLocaleString('es-CL', { month: 'long' });
  const año = fecha.getFullYear();
  return `${mes.charAt(0).toUpperCase() + mes.slice(1)} ${año}`;
};
