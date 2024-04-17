import React, { useState } from 'react';
import { Checkbox } from './ui/checkbox';

interface CourseItemProps {
    title: string;
    href: string;
    videoCount?: string;
}

const CourseItem: React.FC<CourseItemProps> = ({ title, href, videoCount }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <article className="group flex items-start gap-3 px-2 py-4 transition border-b border-b-zinc-200 hover:bg-white">
            <Checkbox/>
            <h5 className="grow font-medium">
                <a href={href}>{title}</a>
            </h5>
            <span className="shrink-0 whitespace-nowrap rounded bg-zinc-100 px-2 py-0.5 text-sm text-zinc-500">{videoCount}</span>
        </article>
    );
};

export default CourseItem;