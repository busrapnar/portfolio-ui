import React from "react";
import Box from "../../components/Box";
import Banner from "../../components/Banner";
import SocialMedia from "../../components/SocialMedia";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import Description from "../../components/Description";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col gap-20">
      <Description content="Merhaba dostlar! Dil öğrenmeye olan tutkumu ve keşiflerimi paylaştığım bir sayfama hoş geldiniz! Burada dil öğrenme sürecimde edindiğim ipuçlarını, pratik yapma tekniklerini ve dil becerilerini geliştirme yollarını keşfedebilirsiniz. Ayrıca, dil öğrenme yolculuğumun videolarını da bulacaksınız. Benimle birlikte İngilizceyi öğrenmeye ve dünya çapında dil topluluğuna katılmaya hazır mısınız? 🌍💬" /> 
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 ">
        <Box
          title="Gramer"
          description="Bilmediğim bir konuyu anlamak istiyorum"
          imageSrc="./images/book.png"
        />
        <Box
          title="Kelime"
          description="Yeni kelimeler ve kalıplar öğrenmek istiyorum."
          imageSrc="./images/gears.png"
        />
        <Box
          title="Telaffuz"
          description="İyi konuşmak ve duyduğumu rahat anlamak istiyorum"
          imageSrc="./images/communication.png"
        />
      </div>
      <Banner />
      <div className="mt-20 grid gap-8 md:grid-cols-1 lg:grid-cols-3 ">
        <SocialMedia
          iconName={FaInstagram}
          title="Instagram'da @birdilingilizce hesabını takip etmeyi unutma!"
          description="İngilizce ile ilgili ipucu ve kolay kullanımları paylaştığımız instagram hesabını takip etmeyi unutmayın."
          addClass="bg-gradient-to-l from-indigo-700 via-purple-700 to-pink-500"
          path="https://instagram.com/birdilingilizce"
        />
        <SocialMedia
          iconName={FaTiktok}
          title="Tiktok'ta @birdilingilizce hesabını takip etmeyi unutma!"
          description="İngilizce ile ilgili ipucu ve kolay kullanımları paylaştığımız instagram hesabını takip etmeyi unutmayın."
          addClass="bg-black"
          path="https://tiktok.com/birdilingilizce"
        />

        <SocialMedia
          iconName={FaYoutube}
          title="Youtube'da @birdilingilizce hesabını takip etmeyi unutma!"
          description="İngilizce ile ilgili ipucu ve kolay kullanımları paylaştığımız instagram hesabını takip etmeyi unutmayın."
          addClass="bg-[#FF0000]"
          path="https://youtube.com/birdilingilizce"
        />
      </div>
    </div>
  );
};

export default Home;
