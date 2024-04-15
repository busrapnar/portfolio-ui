import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className="rounded-lg bg-[#1DA1F2] py-8 px-4 h-60">
            <div className="flex flex-col gap-8">
                <h1 className="text-2xl text-white font-medium">Instagram'da @birdilingilizce hesabını
                    takip etmeyi unutma! </h1>
                <p className="text-lg text-white opacity-70 ">İngilizce ile ilgili ipucu ve kolay kullanımları
                    paylaştığımız instagram hesabını takip etmeyi unutmayın.</p>
                <Link className="bg-white px-4 py-2 rounded-lg text-lg w-36 text-center"
                    to="#" >Sponsor Ol</Link>
            </div>
        </div>
    )
}

export default Banner