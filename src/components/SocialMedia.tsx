import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

type Props = {
    iconName: IconType;
    title: string;
    description: string;
    addClass?: string;
    path: string;
}

const SocialMedia = ({
    iconName: Icon,
    title,
    description,
    addClass,
    path
}: Props) => {
    return (
        <div
            className={`flex flex-col items-center justify-center text-end ${addClass} h-96 gap-4 rounded-lg px-2`}
        >
            <div className="text-white">
                <Icon size={48} />
            </div>
            <h1 className="text-lg text-white font-semibold text-center">{title}</h1>
            <p className="text-white opacity-70 text-center">{description}</p>
            
            <Link 
                to={path}
                target="_blank"
                className='px-8 py-1 bg-background rounded-sm'
            >
                Keşfet
            </Link>
        </div>
    )
}

export default SocialMedia;