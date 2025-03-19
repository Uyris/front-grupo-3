import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sempre que a rota (pathname) mudar, a rolagem volta para o topo
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // O componente não renderiza nada
}

export default ScrollToTop;
