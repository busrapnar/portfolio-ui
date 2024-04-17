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
                    <svg 
                        stroke="currentColor" 
                        fill="currentColor" 
                        strokeWidth="0" 
                        viewBox="0 0 24 24" 
                        height="24px" 
                        width="24px" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
                        <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                    </svg>
                    Sign In
                </button>
            )}

            {isUser && (
                <a 
                    href="/logout" 
                    className="sign-in-button inline-flex gap-2 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <svg 
                        stroke="currentColor" 
                        fill="currentColor" 
                        strokeWidth="0" 
                        viewBox="0 0 24 24" 
                        height="24px" 
                        width="24px" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
                        <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                    </svg>
                    Logout
                </a>
            )}
        </div>
    );
};

export default AuthButtons;