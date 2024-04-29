import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            className={`grow no-underline ${isActive ? ' text-indigo-500' : 'hover:opacity-100 hover:text-blue-500 opacity-60'}`}
            to={to}
        >
            {children}
        </Link>
    );
};

export default NavLink;