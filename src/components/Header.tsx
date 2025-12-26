import Link from 'next/link';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <Link href="/" className="logo">
                    TAYA SOFTWARE DEV.
                </Link>
                <nav className="nav">
                    <a href="mailto:info@tayasoftware.dev" className="btn-modern">
                        Bize Ulaşın
                    </a>
                </nav>
            </div>
        </header>
    );
}
