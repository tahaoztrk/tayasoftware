import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './contact.css';

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="contact-page container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1>İletişime <span className="text-gradient">Geçin</span></h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Projeleriniz için bir kahve içelim.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>İletişim Bilgileri</h3>
                        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Sorularınız, proje talepleriniz veya işbirlikleri için bize ulaşın. Ekibimiz en kısa sürede dönüş yapacaktır.
                        </p>

                        <div style={{ marginTop: '3rem' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <strong style={{ color: 'var(--primary)' }}>Adres</strong> <br />
                                <span style={{ color: 'var(--text-secondary)' }}>İstanbul, Türkiye</span>
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <strong style={{ color: 'var(--primary)' }}>E-posta</strong> <br />
                                <a href="mailto:info@tayadev.com" style={{ color: 'var(--text-secondary)' }}>info@tayadev.com</a>
                            </div>
                            <div>
                                <strong style={{ color: 'var(--primary)' }}>Telefon</strong> <br />
                                <a href="tel:+905555555555" style={{ color: 'var(--text-secondary)' }}>+90 555 555 55 55</a>
                            </div>
                        </div>
                    </div>

                    <form className="glass-card">
                        <div className="form-group">
                            <label className="form-label">Adınız Soyadınız</label>
                            <input type="text" className="form-input" placeholder="Adınız" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">E-posta Adresiniz</label>
                            <input type="email" className="form-input" placeholder="ornek@sirket.com" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Mesajınız</label>
                            <textarea className="form-textarea" placeholder="Projenizden bahsedin..."></textarea>
                        </div>
                        <button type="button" className="btn btn-primary" style={{ width: '100%' }}>
                            Gönder
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
