import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTopAut = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // También puedes usar 'auto'
  }, [pathname]);

  return null;
};

export default ScrollTopAut;
