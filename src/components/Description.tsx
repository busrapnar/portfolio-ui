import React from 'react';

type Props = {
    content: string;
};

const Description: React.FC<Props> = ({ content }) => {
    return (
        <div>
            <div className="mt-20 px-6 py-10 border border-gray-300 bg-white opacity-75 rounded-lg">
                <p className="text-xl">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default Description;