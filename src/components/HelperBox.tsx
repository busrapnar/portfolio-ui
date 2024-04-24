import { IconType } from 'react-icons';

type Props = {
    title: string;
    iconName: IconType,
    addClass?: string,
}

const HelperBox = ({ title,iconName: Icon , addClass }: Props) => {
    const additionalClass = addClass ? ` ${addClass}` : '';
    return (
        <div className={`flex flex-col items-center justify-center py-8 gap-8 border px-24${additionalClass}`}>
            <Icon size={48} className="" />
            <h1 className="text-xl font-bold text-center">{title}</h1>
            
            
        </div>
    )
}

export default HelperBox