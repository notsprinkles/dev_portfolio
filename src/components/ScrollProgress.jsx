import { useEffect, useState } from 'react';
import '../styles/ScrollProgress.css';

function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      setPct(Math.max(0, Math.min(1, scrolled)) * 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="scrollbar" style={{ width: `${pct}%` }} aria-hidden="true" />;
}
export default ScrollProgress;
