import { useRef } from 'react';
import useScrollReveal from './useScrollReveal';

const portfolioItems = [
  {
    image: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/68b6992d41510a89fa3e9e9f_portfolio-img-2.jpg',
    category: 'Organisiertes Wohnen',
    title: 'PureShine: Experten für Tiefenreinigung',
  },
  {
    image: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/68b6993bd208e42ea8eaf3db_portfolio-img-3.jpg',
    category: 'Tiefenreinigung',
    title: 'FreshNest: Verwandlung von Lebensräumen',
  },
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="portfolio" className="section-regular" ref={sectionRef}>
      <div className="w-layout-blockcontainer container w-container">

        <div className="section-title-wrap">
          <div className="transform-section-title-area">
            <div className="w-layout-vflex recent-blog-wrap reveal reveal-fade">
              <div className="subtitle">
                <div className="subtitle-icon">
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                    loading="lazy" alt="star"
                  />
                </div>
                <div>Portfolio</div>
              </div>
              <h2 className="section-title mg-0">
                Werfen Sie einen Blick auf unsere neuesten Projekte
              </h2>
            </div>
          </div>
        </div>

        <div className="mg-top-80">
          <div className="w-dyn-list">
            <div role="list" className="w-dyn-items w-row">
              {portfolioItems.map((item, i) => (
                <div
                  key={i}
                  role="listitem"
                  className="portfolio-collection-item w-dyn-item w-col w-col-6 reveal reveal-scale"
                  style={{ '--d': `${i * 0.18}s` }}
                >
                  <div className="portfolio-card">
                    <div className="portfolio-image-wrap">
                      <div className="portfolio-image-area">
                        <img
                          loading="eager"
                          alt={item.title}
                          src={item.image}
                          className="home-project-card-image"
                        />
                        <div className="portfolio-overlay"></div>
                      </div>
                    </div>
                    <div className="home-project-card-content-wrap">
                      <div className="home-project-category-link">{item.category}</div>
                      <div className="card-title">{item.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
