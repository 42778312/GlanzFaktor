import { useEffect, useState } from 'react';

export default function Loader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone]     = useState(false);

  useEffect(() => {
    // Start fade-out when window is fully loaded (images etc.)
    const hide = () => {
      setHiding(true);
      // Remove from DOM after transition finishes
      setTimeout(() => setGone(true), 700);
    };

    if (document.readyState === 'complete') {
      // Already loaded – keep loader visible for at least 1.4 s so it looks intentional
      const t = setTimeout(hide, 1400);
      return () => clearTimeout(t);
    }

    window.addEventListener('load', hide, { once: true });

    // Safety net: never show longer than 4 s
    const safety = setTimeout(hide, 4000);
    return () => {
      window.removeEventListener('load', hide);
      clearTimeout(safety);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`page-loader${hiding ? ' page-loader--hide' : ''}`}>
      {/* Ring + logo centred together */}
      <div className="loader-center">
        <div className="loader-ring">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              className="loader-ring__track"
              cx="60" cy="60" r="54"
              strokeWidth="1"
            />
            <circle
              className="loader-ring__spin"
              cx="60" cy="60" r="54"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Logo */}
        <img
          src="/Assest/log.png"
          alt="GlanzFaktor"
          className="loader-logo"
          draggable="false"
        />
      </div>

      {/* Brand name */}
      <p className="loader-brand">G L A N Z F A K T O R</p>
    </div>
  );
}
