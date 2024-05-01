import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import Avatar from "../../components/Avatar";
import NavLink from "../../components/NavLink";
import { LanguageToggle } from "../../components/LanguageToggle";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative py-5 max-w-screen-xl mx-auto">
      <nav className="flex items-center justify-between text-lg ">
        <Avatar
          name="Mustafa ÜNLÜ"
          role="Software Developer"
          imageSrc="./images/logo.jpeg"
        />
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="hamburger"
            aria-label="Menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <IoMenu className="h-12 w-12" />
          </button>
        </div>
        <div className={`lg:flex items-center justify-center gap-5 hidden relative`} >
          <NavLink to="/projects">{t("project")}</NavLink>
          <NavLink to="/posts">{t("posts")}</NavLink>
          <NavLink to="/bookmarks">{t("bookmarks")}</NavLink>
          <LanguageToggle/>
        </div>
      </nav>
      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div className="fixed lg:hidden bg-background top-0 right-0 h-full w-64 z-100" >
          <div className="flex justify-end items-center px-4 py-2">
            <button
              aria-label="Close Menu"
              className="focus:outline-none"
              onClick={toggleMenu}
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center items-end text-xl z-50">
            <Link
              className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
              to="/projects"
            >
              {t("project")}
            </Link>
            <Link
              className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
              to="/posts"
            >
              {t("posts")}
            </Link>
            <Link
              className="block py-2 px-4 mx-4 no-underline rounded-lg hover:bg-indigo-500 hover:text-white"
              to="/bookmarks"
            >
              {t("bookmarks")}
            </Link>
            <div className="py-2 px-4 mx-6">
              <LanguageToggle/>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;