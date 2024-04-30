import React from 'react';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';

interface CourseItemProps {
    title: string;
    href: string;
    videoCount?: string;
}

const CourseItem: React.FC<CourseItemProps> = ({ title, href, videoCount }) => {

    return (
        <article className="group flex items-start gap-3 px-2 py-4 transition border-b  hover:bg-accent">
            <Checkbox/>
            <h5 className="grow font-medium">
                <a href={href}>{title}</a>
            </h5>
            <Badge variant="outline" className='border-blue-800'>{videoCount}</Badge>
        </article>
    );
};

export default CourseItem;