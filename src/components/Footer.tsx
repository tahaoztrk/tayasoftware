import Link from 'next/link';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col" style={{ maxWidth: '300px' }}>
                        <Link href="/" className="logo">TayaDev</Link>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            İşletmeniz için modern, hızlı ve ölçeklenebilir dijital çözümler üretiyoruz. Geleceği birlikte inşa edelim.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Hizmetler</h4>
                        <ul>
                            <li><Link href="#">Web Geliştirme</Link></li>
                            <li><Link href="#">Özel Yazılım</Link></li>
                            <li><Link href="#">Mobil Uygulama</Link></li>
                            <li><Link href="#">Dijital Dönüşüm</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Kurumsal</h4>
                        <ul>
                            <li><Link href="#">Hakkımızda</Link></li>
                            <li><Link href="#">Süreçlerimiz</Link></li>
                            <li><Link href="#">Referanslar</Link></li>
                            <li><Link href="#">İletişim</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Bize Ulaşın</h4>
                        <ul>
                            <li><a href="mailto:info@tayadev.com">info@tayadev.com</a></li>
                            <li><a href="tel:+905555555555">+90 555 555 55 55</a></li>
                            <li>İstanbul, Türkiye</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} TayaDev. Tüm hakları saklıdır.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link href="#">Gizlilik Politikası</Link>
                        <Link href="#">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
