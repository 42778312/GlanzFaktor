export default function Counter() {
  return (
    <section>
      <div className="w-layout-blockcontainer container w-container">
        <div>
          <div className="counter-wrap">
            <div>
              <div className="count-number-area mobile-center">
                <div className="count-number-wrap bottom">
                  <h2 className="section-title mg-0">5</h2>
                </div>
                <div className="count-number-wrap top">
                  <h2 className="section-title mg-0">0</h2>
                </div>
                <div className="count-number-wrap">
                  <h2 className="section-title mg-0">+</h2>
                </div>
              </div>
              <div className="mg-top-10">
                <p className="mg-0">
                  Bereits über 50 zufriedene Kunden – mit Qualität, auf die Sie sich verlassen können!
                </p>
              </div>
            </div>

            <div className="testimonial-logo-area">
              <div className="testimonial-logo">
                <img
                  src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada58dc8e2e861699067e0_client-logo-1.svg"
                  loading="lazy"
                  alt="Partner Logo"
                />
              </div>
              <div className="testimonial-logo">
                <img
                  src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada58da8c2e0e1d73f1b1e_client-logo-2.svg"
                  loading="lazy"
                  alt="Partner Logo"
                />
              </div>
              <div className="testimonial-logo">
                <img
                  src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada58db7e88eb3dc4c40cd_client-logo-3.svg"
                  loading="lazy"
                  alt="Partner Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
