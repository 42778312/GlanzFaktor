import { useEffect } from 'react';

/**
 * Observes all `.reveal` descendants of `ref` and adds `.revealed`
 * when they enter the viewport. Uses `transition-delay: var(--d, 0s)` for stagger.
 */
export default function useScrollReveal(ref, options = {}) {
  useEffect(() => {
    const root = ref?.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px', ...options }
    );

    root.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
