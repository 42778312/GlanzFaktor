const services = [
  {
    title: 'Büros & Verwaltungsgebäude',
    icon: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/68021335c8a6bf6da155edb9_service-icon-1.svg',
    text: 'Professionelle Büroreinigung für produktive Arbeitsumgebungen. Von Schreibtischen über Besprechungsräume bis zu Sanitäranlagen – wir sorgen für ein hygienisches und repräsentatives Arbeitsklima am Bodensee.',
  },
  {
    title: 'Fitnessstudios',
    icon: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/6822fe61a7f89b35ad6d177b_service-icon-2.svg',
    text: 'Spezialisierte Reinigung für Fitnessstudios und Sportstätten. Hygienische Gerätereinigung, Umkleiden und Duschbereiche – für eine saubere und motivierende Trainingsatmosphäre Ihre Mitglieder begeistern wird.',
  },
  {
    title: 'Hotels & Pensionen',
    icon: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/6822fe6b7fd69f641f5fadb7_service-icon-3.svg',
    text: 'Perfekte Sauberkeit für Ihre Gäste! Zimmerreinigung, Bettwäsche-Service und Gemeinschaftsbereiche – wir sorgen dafür, dass Ihre Gäste am Bodensee einen makellosen Aufenthalt genießen und gerne wiederkommen.',
  },
  {
    title: 'Einzelhandel & Einkaufszentren',
    icon: 'https://cdn.prod.website-files.com/67ed0cb918a16dfcec7cea30/6822fe7443bb44e2cd82aef8_service-icon-4.svg',
    text: 'Einladende Verkaufsflächen durch professionelle Reinigung. Schaufenster, Verkaufsräume, Lager und Kundentoiletten – schaffen Sie ein angenehmes Einkaufserlebnis, das Ihre Kunden zum Verweilen einlädt.',
  },
];

export default function Services() {
  return (
    <div className="grey-bg">
      <section className="section-regular">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title-wrap">
            <div className="align-center">
              <div className="subtitle">
                <div className="subtitle-icon">
                  <img
                    src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/68ada4d8c8e2e861698ff365_subtitle-star.svg"
                    loading="lazy"
                    alt="star"
                  />
                </div>
                <div>Unsere Leistungen</div>
              </div>
              <div className="inner-container-600">
                <h2 className="section-title mg-0">
                  Verwandeln Sie Ihre Räume mit professioneller Reinigung
                </h2>
              </div>
            </div>
          </div>
          <div className="transform-area">
            <div className="w-layout-grid home-service-grid">
              <div className="transform-image-wrap">
                <img
                  src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/689040cf71aca02a7b15f250_d9a41b2378a267313f7d293a2d48ce46_transform-image-1.jpg"
                  loading="lazy"
                  width="384"
                  alt="Medium Shot People Cleaning Building"
                  className="transform-image"
                />
                <div className="service-overlay"></div>
              </div>

              {services.map((s, i) => (
                <div key={i}>
                  <div className="home-service-card">
                    <div className="w-layout-vflex home-service-top-wrap">
                      <div className="card-title">{s.title}</div>
                      <div className="home-service-icon-wrap">
                        <img
                          src={s.icon}
                          loading="lazy"
                          alt="Service Icon"
                          className="home-service-icon"
                        />
                      </div>
                    </div>
                    <div className="w-layout-vflex home-service-card-content-area">
                      <p>{s.text}</p>
                    </div>
                    <div className="home-service-card-overlay"></div>
                  </div>
                </div>
              ))}

              <div className="transform-image-wrap">
                <img
                  src="https://cdn.prod.website-files.com/67e50220a4446ac664873e26/689044ec722ec3a7e646ab1a_36ea35fc8945103fbbc8fa6065d85d89_transform-image-2.jpg"
                  loading="lazy"
                  width="384"
                  alt="Professional Cleaning Service Person Using Vacuum Cleaner Office"
                  className="transform-image"
                />
                <div className="service-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
