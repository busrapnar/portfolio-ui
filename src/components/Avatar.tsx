import React from 'react';
import { Link } from 'react-router-dom';

interface AvatarProps {
    name: string;
    role: string;
    imageSrc: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, role, imageSrc }) => {
    return (
        <div>
            <Link className="grow flex gap-2 no-underline rounded-full items-center" to="/">
                <img src={imageSrc} alt={name} className="w-16 h-16 rounded-full" />
                <div className="flex flex-col">
                    <h1 className="text-xl">{name}</h1>
                    <span className="text-xl opacity-60">{role}</span>
                </div>
            </Link>
        </div>
    );
};

export default Avatar;