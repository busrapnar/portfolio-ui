import { Link } from 'react-router-dom'

type Props = {
    title: string;
    description: string;
    imageSrc: string;
}

const Box = ({ title, description, imageSrc }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center bg-white h-80 gap-4 border rounded-lg px-2">
            <img src={imageSrc} className="w-20 h-20" alt=""/>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="opacity-80 text-center">{description}</p>
            <Link to="/" className="underline opacity-80 hover:opacity-100 hover:text-blue-500">
                Sayfaya git
            </Link>
        </div>
    )
}

export default Box;