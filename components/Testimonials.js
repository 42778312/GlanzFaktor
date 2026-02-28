import { useState } from 'react';

const slides = [
  {
    image: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/683d4e48a4ca8cd615e9f3b0_6b6317df7e28cfb29e19862ab8d102e4_testimonial-image-4.jpg',
    alt: 'Portrait Of A Young Woman With Glasses',
    text: '"Der Reinigungsservice war fantastisch! Sie haben mein Zuhause in einen makellosen Zustand gebracht. Vom Moment ihrer Ankunft an war das Team professionell."',
    name: 'Sarah Johnson',
    role: 'Hausbesitzer',
  },
  {
    image: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/682597fb40a6776a7f76182a_1c68dd6dc669f0c56d0fe91f59fddbba_testimonial-image-2.jpg',
    alt: 'Confident Young Man In Modern Workspace',
    text: '"Ihre Liebe zum Detail und ihre Professionalität stellen sicher, dass jeder Raum makellos und einladend ist, was einen großartigen Eindruck bei potenziellen Käufern hinterlässt."',
    name: 'John Matthews',
    role: 'Immobilienmakler',
  },
  {
    image: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/6822fb99bd9e553518d85efc_9f16ab2c9995fda549e7780c11fb7045_testimonial-image-1.jpg',
    alt: 'A New Zealand Female Business Owner Stands And Is Happy',
    text: '"Unser Büro in Radolfzell wurde von GlanzFaktor komplett gereinigt – vom Teppich bis zu den Fenstern. Unfassbar gründlich und mit umweltfreundlichen Produkten. Wir sind begeistert und buchen regelmäßig!"',
    name: 'Julia Schneider',
    role: 'Geschäftsführerin IT-Firma',
  },
  {
    image: 'https://cdn.prod.website-files.com/67e50220a4446ac664873e26/682598055b28648b7f78b159_43c7eebc9fbad1361e04da4d0261f639_testimonial-image-3.jpg',
    alt: 'Cheerful Young Man With Glasses',
    text: '"Nach unserem Umzug in die neue Wohnung hat GlanzFaktor eine Grundreinigung durchgeführt. Die Wohnung sah aus wie neu! Schnell, effizient und zum fairen Preis. Danke an das tolle Team!"',
    name: 'Markus Bauer',
    role: 'Neukunde, Kreuzlingen',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section>
      <div className="w-layout-blockcontainer container w-container">
        <div className="mg-top-80">
          <div>
            <div className="testimonial-slider-wrap">
              <div className="testimonial-slider-container">
                <div className="testimonial-mask w-slider-mask">
                  <div className="testimonial-slider-item w-slide">
                    <div className="w-layout-vflex testimonial-card">
                      <div className="testimonial-image-wrap">
                        <img
                          src={slide.image}
                          loading="lazy"
                          alt={slide.alt}
                          className="testimonial-image"
                        />
                        <div className="testimonial-overlay"></div>
                      </div>
                      <div className="w-layout-vflex testimonial-content-wrap">
                        <div>
                          <p className="testimonial-text">{slide.text}</p>
                          <div>
                            <h3 className="testimonial-name">{slide.name}</h3>
                            <p className="testimonial-designation">{slide.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="testimonial-arrow left w-slider-arrow-left"
                  onClick={prev}
                  role="button"
                  aria-label="Previous"
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68b520e88780b7f7244fc3e7_left-arrow.svg"
                    loading="lazy"
                    alt="arrow"
                    className="testimonial-arrow-icon"
                  />
                </div>
                <div
                  className="testimonial-arrow right w-slider-arrow-right"
                  onClick={next}
                  role="button"
                  aria-label="Next"
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68b52132ab9922a82c95684f_right-arrow.svg"
                    loading="lazy"
                    alt="arrow"
                    className="testimonial-arrow-icon"
                  />
                </div>

                <div className="testimonial-slider-nav w-slider-nav w-slider-nav-invert w-round">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        border: 'none',
                        padding: 0,
                        marginRight: 6,
                        background: i === current ? '#F7931E' : '#ccc',
                        cursor: 'pointer',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
