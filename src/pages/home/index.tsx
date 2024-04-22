import Box from "../../components/HelperBox";
import SocialMedia from "../../components/SocialMedia";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

import Sponsor from "../../components/Sponsor";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";
import HelperBox from "../../components/HelperBox";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <Card className=" px-6 py-10 border border-gray-300 bg-white opacity-80 rounded-lg">
        <CardDescription className="text-xl">
          Merhaba dostlar! Dil öğrenmeye olan tutkumu ve keşiflerimi paylaştığım
          bir sayfama hoş geldiniz!
          <br />
          Burada dil öğrenme sürecimde edindiğim ipuçlarını, pratik yapma
          tekniklerini ve dil becerilerini geliştirme yollarını
          keşfedebilirsiniz. <br />
          Ayrıca, dil öğrenme yolculuğumun videolarını da bulacaksınız. <br />
          Benimle birlikte İngilizceyi öğrenmeye ve dünya çapında dil
          topluluğuna katılmaya <b>hazır mısınız? 🌍💬</b>
        </CardDescription>
      </Card>
      <div className="mt-16 flex flex-col gap-4">
        <CardTitle className="font-bold text-3xl">Kendine değer kat!</CardTitle>
        <CardDescription className="font-normal text-base font-montserrat">
          İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir
          çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya
          hazırsın!
        </CardDescription>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 ">
        <HelperBox
          title="Gramer"
          description="Bilmediğim bir konuyu anlamak istiyorum"
          imageSrc="./images/book.png"
        />
        <HelperBox
          title="Kelime"
          description="Yeni kelimeler ve kalıplar öğrenmek istiyorum."
          imageSrc="./images/gears.png"
        />
        <HelperBox
          title="Telaffuz"
          description="İyi konuşmak ve duyduğumu rahat anlamak istiyorum"
          imageSrc="./images/communication.png"
        />
      </div>
      <div>
        <div className="mt-16 flex flex-col gap-4">
          <CardTitle className="font-bold text-3xl">
            Katkılarla daha güçlüyüz!
          </CardTitle>
          <CardDescription className="font-normal text-base font-montserrat">
            Kesintisiz İngilizce öğrenme yolculuğumuz için, doğru bir başlangıç
            şarttır. Ben de bu kesintisiz yolculuğumuzda sizlere öğrendiğim her
            şeyi aktarmak istiyorum ve sponsor olmak isterseniz, hazırım!
          </CardDescription>
        </div>
        <Sponsor names={["Onurhan", "Abdullah", "Ahmet"]} />
      </div>
      <div className="mt-16 flex flex-col gap-4">
        <CardTitle className="font-bold text-3xl">
          Yenilikleri birlikte takip edelim!
        </CardTitle>
        <CardDescription className="font-normal text-base font-montserrat">
          Öğrendiğim şeylerle ilgili hazırladığım son içeriklerden anında
          haberdar olmak için sosyal medya hesabımı takip etmeyi unutma!
        </CardDescription>
      </div>
      <div className="mt-[-1.5rem] grid gap-8 md:grid-cols-1 lg:grid-cols-3 ">
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
