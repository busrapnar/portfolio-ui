import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import Popup from '../../components/Popup';
import AuthButtons from '../../components/AuthButtons';

const Header: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const isAnonymous = false; // Burada kullanıcı durumunu kontrol etmeli
    const isUser = true; // Burada kullanıcı durumunu kontrol etmeli

    const handleSignInClick = (): void => {
        setIsPopupOpen(true);
        setIsMenuOpen(false);
    };

    const closePopup = (): void => {
        setIsPopupOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            closePopup();
        }
    };

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isPopupOpen || isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPopupOpen, isMenuOpen]);

    return (
        <header className="py-10 border-b-4 border-indigo-500">
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
                    <button 
                        className="hamburger" 
                        aria-label="Menu" 
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        onClick={toggleMenu}
                    >
                        <IoMenu className='h-12 w-12'/>
                    </button>
                </div>
                <div className={`lg:flex items-center justify-center gap-12 hidden`}>
                    {!isUser && (
                        <>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/videos">Eğitimler</Link>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/photos">Fotoğraflar</Link>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/bookmarks">Kaynaklar</Link>
                                <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/posts">Yazılar</Link>
                        </>
                    )}
                    {isUser && (
                        <>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/users">Kullanıcılar</Link>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/settings">Site Ayarları</Link>
                                <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/posts">Yazılar</Link>
                            
                        </>
                    )}
                    <AuthButtons isAnonymous={isAnonymous} isUser={isUser} onSignInClick={handleSignInClick}/>
                </div>
            </nav>
            {isPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
                    <div ref={popupRef}>
                        <Popup />
                    </div>
                </div>
            )}
            {/* Hamburger Menu */}
            <div className={`${isMenuOpen ? 'fixed' : 'hidden'} lg:hidden top-0 right-0 bg-white h-full w-64 shadow-lg z-10`}>
                <div className="flex justify-end items-center px-4 py-2">
                    <button 
                        aria-label="Close Menu" 
                        className="focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <IoClose className='w-6 h-6'/>
                    </button>
                </div>
                <div className="flex flex-col gap-4 justify-center items-end text-xl">
                    {!isUser && (
                        <>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/videos">Eğitimler</Link>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/photos">Fotoğraflar</Link>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/bookmarks">Kaynaklar</Link>
                                <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/posts">Kaynaklar</Link>
                        </>
                    )}
                    {isUser && (
                        <>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/users">Kullanıcılar</Link>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/settings">Site Ayarları</Link>
                                <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/posts">Yazılar</Link>
                            <button 
                                className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white sign-in-button"
                                onClick={() => { /* Çıkış işlemi buraya gelecek */ }}
                            >
                                Çıkış Yap
                            </button>
                        </>
                    )}
                    {isAnonymous && (
                        <button 
                            className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white sign-in-button"
                            onClick={handleSignInClick}
                        >
                            Sign In
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;