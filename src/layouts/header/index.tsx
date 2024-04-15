import { Link } from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { useState, useEffect, useRef, MouseEvent } from 'react';
import Popup from '../../components/Popup';

const Header: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const handleSignInClick = (): void => {
        setIsPopupOpen(true);
    };

    const closePopup = (): void => {
        setIsPopupOpen(false);
    };

    const handleClickOutside = (event: MouseEvent): void => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            closePopup();
        }
    };

    useEffect(() => {
        if (isPopupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopupOpen]);

    return (
        <header className="py-10">
            <nav className="flex items-center justify-between text-lg">
                <div>
                    <Link className="grow flex gap-2 no-underline rounded-full items-center" to="/">
                        <img src="./images/logo.jpeg" alt="" className="w-16 h-16 rounded-full" />
                        <div className="flex flex-col">
                            <h1 className="text-xl">Mustafa ÜNLÜ</h1>
                            <span className="text-xl opacity-60">Product Designer</span>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center gap-4 lg:hidden">
                    <button id="menu-toggle" className="hamburger" aria-label="Menu" aria-expanded="false">
                        <svg className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex items-center justify-center gap-12">
                    <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                        to="/videos">Eğitimler</Link>
                    <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                        to="/photos">Fotoğraflar</Link>
                    <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                        to="/posts">Yazılar</Link>
                    <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                        to="/bookmarks">Kaynaklar</Link>
                    <button
                        onClick={handleSignInClick}
                        className="inline-flex gap-2 items-center cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sign-in-button"
                    >
                        <IoLogInOutline />
                        Sign In
                    </button>
                </div>
            </nav>
            {isPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div ref={popupRef} className="bg-white p-8 rounded-md">
                        <Popup />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;