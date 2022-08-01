import logo from '../assets/polleria-logo.png';
import './Header.css';

export function Header() {
    return (
        <header className="header-container">
            <div className='header'>
                <div className='header__brand brand'>
                    <div className='brand__logo-container'>
                        <img className='brand__logo' src={logo} alt="Logotipo" />
                    </div>
                    <p className='brand__name'>La Caleta</p>
                </div>
                <div className='header__items'>
                    <nav className="header__nav nav">
                        <ul className='nav__ul'>
                            <li className='nav__li'>
                                <a className='nav__a' href="#">Cartas</a>
                            </li>
                            <li className='nav__li'>
                                <a className='nav__a' href="#">Promociones</a>
                            </li>
                            <li className='nav__li'>
                                <a className='nav__a' href="#">Locales</a>
                            </li>
                            <li className='nav__li'>
                                <a className='nav__a' href="#">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                    <a href="#" className="header__a">¡PIDE ONLINE!</a>
                </div>
            </div>
        </header>
    )
}