import { useEffect, useRef } from 'react';

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hiw-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
    );

    section.querySelectorAll('.hiw-animate').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.querySelector('#contact-form');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <section className="hiw-section" ref={sectionRef}>
      <div className="w-layout-blockcontainer container w-container">

        {/* Title */}
        <div className="hiw-title-block">
          <div className="subtitle" style={{ justifyContent: 'center' }}>
            <div className="subtitle-icon">
              <img
                src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                loading="lazy" alt="star"
              />
            </div>
            <div>So einfach geht&apos;s</div>
          </div>
          <h2 className="section-title mg-0" style={{ textAlign: 'center', marginTop: '12px' }}>
            Ihr Weg zur perfekten Sauberkeit<br />in nur 3 Schritten!
          </h2>
        </div>

        {/* Steps */}
        <div className="hiw-steps">
          {[
            { n: '01', title: 'Anfrage stellen', text: 'Kontaktieren Sie uns telefonisch, per E-Mail oder über unser Kontaktformular – schnell, unkompliziert und kostenlos.' },
            { n: '02', title: 'Individuelles Angebot', text: 'Wir erstellen Ihnen ein maßgeschneidertes Angebot basierend auf Ihren Bedürfnissen – transparent und fair kalkuliert.' },
            { n: '03', title: 'Perfekte Ausführung', text: 'Unser Profi-Team reinigt termingerecht, gründlich und mit höchster Sorgfalt – Sie werden begeistert sein!' },
          ].map((step, i) => (
            <div
              key={step.n}
              className="hiw-animate hiw-step-card"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="hiw-step-num">{step.n}</span>
              <h3 className="hiw-step-title">{step.title}</h3>
              <p className="hiw-step-text">{step.text}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="hiw-animate hiw-step-card hiw-cta-card" style={{ transitionDelay: '0.36s' }}>
            <img
              src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68f8c24fc7b56a76ac9689f3_star.svg"
              loading="lazy" alt="star"
              style={{ width: '32px', marginBottom: '16px' }}
            />
            <h3 className="hiw-step-title" style={{ color: '#fff' }}>
              Bereit für strahlende Sauberkeit? Kontaktieren Sie uns jetzt!
            </h3>
            <a href="#contact-form" onClick={scrollToContact} className="primary-button w-inline-block" style={{ marginTop: '20px' }}>
              <div>Jetzt buchen</div>
              <div className="button-icon">
                <img
                  src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/67e50f402a56ac86b3ff7be6_arrow.svg"
                  loading="lazy" alt="arrow"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
