import Header from '@/components/Header';
import SplineScene from '@/components/SplineScene';
import './home.css';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Background Layer (retained) */}
        <div className="hero-background">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bg-flow.png" alt="Background Flow" className="hero-bg-image" />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 0%, #000 90%)' // Vignette
          }}></div>
        </div>

        <section className="hero container">
          <div className="hero-content animate-fade-in" style={{ maxWidth: '1000px' }}>



            <h1 className="hero-title">
              <span className="text-gradient">BAKIMDAYIZ.</span>
            </h1>

            <p className="hero-desc">
              Vizyonumuzu sizlere daha iyi yansıtabilmek için yenileniyoruz.
            </p>

            {/* Spline Scene Container */}
            <div className="banner-container" style={{
              height: '600px',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              overflow: 'visible',
              position: 'relative'
            }}>
              <SplineScene />
            </div>



          </div>
        </section>

      </main>
    </>
  );
}
