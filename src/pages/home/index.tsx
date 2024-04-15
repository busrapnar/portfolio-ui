import React from 'react'
import Box from '../../components/Box'

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <div className="mt-20 px-6 py-10 border border-gray-300 bg-white opacity-75 rounded-lg">
                <p className="text-xl">
                    Merhaba dostlar! Dil öğrenmeye olan tutkumu ve keşiflerimi
                    paylaştığım bir sayfama hoş geldiniz!
                    <br />
                    Burada dil öğrenme sürecimde edindiğim ipuçlarını, pratik yapma
                    tekniklerini ve dil becerilerini geliştirme yollarını
                    keşfedebilirsiniz. <br />
                    Ayrıca, dil öğrenme yolculuğumun videolarını da bulacaksınız. <br />
                    Benimle birlikte İngilizceyi öğrenmeye ve dünya çapında dil
                    topluluğuna katılmaya <b>hazır mısınız? 🌍💬</b>
                </p>
            </div>
            <div className="mt-20 grid gap-8 md:grid-cols-1 lg:grid-cols-3 ">
                <Box 
                title='Gramer'
                description="Bilmediğim bir konuyu anlamak istiyorum" 
                imageSrc="./images/book.png" />
                <Box 
                title='Kelime'
                description="Yeni kelimeler ve kalıplar öğrenmek istiyorum." 
                imageSrc="./images/gears.png" />
                <Box 
                title='Telaffuz'
                description="İyi konuşmak ve duyduğumu rahat anlamak istiyorum" 
                imageSrc="./images/communication.png" />
            </div>
        </div>
    )
}

export default Home