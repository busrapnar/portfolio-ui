import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5";
import Popup from '../../components/Popup';
import AuthButtons from '../../components/AuthButtons';
import { MdOutlineManageAccounts } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import Avatar from '../../components/Avatar';

const Header: React.FC = () => {
    const {t} = useTranslation()
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
        <header className="min-w-[500px] py-10 border-b-2 border-indigo-500 border-opacity-20">
            <nav className="flex items-center justify-between text-lg">
                <Avatar name='Mustafa ÜNLÜ' role='Product Designer' imageSrc='./images/logo.jpeg'/>
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
                <div className={`lg:flex items-center justify-center gap-5 hidden relative`}>
                    {!isUser && (
                        <>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/videos">{t('videos')}</Link>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/photos">{t('photos')}</Link>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/bookmarks">{t('bookmarks')}</Link>
                                <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/posts">{t('posts')}</Link>
                        </>
                    )}
                    {isUser && (
                        <>
                        <div className='flex items-center gap-12'>

                           <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/videos">{t('videos')}</Link>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/photos">{t('photos')}</Link>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/bookmarks">{t('bookmarks')}</Link>
                            <Link className="grow no-underline hover:opacity-100 hover:text-blue-500 opacity-60"
                                to="/posts">{t('posts')}</Link>
                               
                            <Link className="flex items-center gap-1 rounded-md border border-indigo-600 px-3 py-2 text-sm font-semibold opacity-60 hover:opacity-100 hover:text-white shadow-sm hover:bg-indigo-600 "
                                to="/settings"><MdOutlineManageAccounts className='w-6 h-6'/>{t('management')}</Link>
                             </div>
                        </>
                    )}
                    <div >
                    <AuthButtons isAnonymous={isAnonymous} isUser={isUser} onSignInClick={handleSignInClick}/>  
                    </div>
                    
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
                                to="/videos">{t('videos')}</Link>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/photos">{t('photos')}</Link>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/bookmarks">{t('bookmarks')}</Link>
                                <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/posts">{t('posts')}</Link>
                        </>
                    )}
                    {isUser && (
                        <>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/videos">{t('videos')}</Link>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/photos">{t('photos')}</Link>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/bookmarks">{t('bookmarks')}</Link>
                                <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/posts">{t('posts')}</Link>
                            <Link className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
                                to="/settings">{t('management')}</Link>
                            
                        </>
                    )}
                    <div className='mx-4'>
                    <AuthButtons isAnonymous={isAnonymous} isUser={isUser} onSignInClick={handleSignInClick}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;