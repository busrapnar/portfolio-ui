import { LogIn, LogOut } from 'lucide-react';
import React from 'react';

interface AuthButtonsProps {
    isAnonymous: boolean;
    isUser: boolean;
    onSignInClick: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ isAnonymous, isUser, onSignInClick }) => {
    return (
        <div>
            {isAnonymous && (
                <button 
                    className="sign-in-button inline-flex gap-2 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                    onClick={onSignInClick}
                >
                    <LogIn />
                    Sign In
                </button>
            )}

            {isUser && (
                <a 
                    href="/logout" 
                    className="sign-in-button inline-flex gap-2 items-center rounded-md border border-indigo-600 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <LogOut />
                    Logout
                </a>
            )}
        </div>
    );
};

export default AuthButtons;