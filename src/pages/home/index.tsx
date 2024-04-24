import SocialMedia from "../../components/SocialMedia";
import { FaInstagram, FaTiktok, FaYoutube, FaGolang } from "react-icons/fa6";
import { FaRegComments, FaReact, FaRegCalendarAlt, FaHtml5, FaCss3 } from "react-icons/fa";
import Sponsor from "../../components/Sponsor";
import { CardDescription, CardTitle } from "../../components/ui/card";
import HelperBox from "../../components/HelperBox";
import { SiMongodb } from "react-icons/si";
import { SlEnergy } from "react-icons/sl";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { RxUpdate } from "react-icons/rx";
import { TbTestPipe } from "react-icons/tb";
import StackBox from "../../components/StackBox";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 mt-20">
      
        <div className="py-10 opacity-80 flex flex-col gap-10 rounded-lg border  px-6">
          <div className="text-xl leading-relaxed md:text-justify text-center">
            Uygulama ve servis hizmetlerimizdeki odak noktamız, ihtiyaçlara
            yönelik çözümler sunmaktır. Sizler, işlerinizi büyütmeye daha
            çok vakit ayırabilirsiniz. Uygulama ve servis hizmetlerimizdeki odak noktamız, ihtiyaçlara
            yönelik çözümler sunmaktır. Sizler, işlerinizi büyütmeye daha
            çok vakit ayırabilirsiniz. 
            Uygulama ve servis hizmetlerimizdeki odak noktamız, ihtiyaçlara
            yönelik çözümler sunmaktır. Sizler, işlerinizi büyütmeye daha
            çok vakit ayırabilirsiniz. 
          </div>
          <div className="md:flex grid grid-cols-3 gap-4 md:gap-10 items-center justify-center">
          <StackBox title="React" iconName={FaReact} />
          <StackBox title="Golang" iconName={FaGolang} />
          <StackBox title="MongoDB" iconName={SiMongodb} />
          <StackBox title="React" iconName={FaReact} />
          <StackBox title="HTML" iconName={FaHtml5} />
          <StackBox title="CSS" iconName={FaCss3} />

        </div>
        </div>
        
     
      <div className="mt-16 flex flex-col gap-4">
        <CardTitle className="font-bold text-3xl">Kendine değer kat!</CardTitle>
        <CardDescription className="font-normal text-base font-montserrat">
          İyi bir kariyer için, doğru bir başlangıç gerekir. Prototürk'de bir
          çok dil ve teknolojiye ait derslerle doğru bir başlangıç yapmaya
          hazırsın!
        </CardDescription>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <HelperBox
          iconName={SlEnergy}
          title="Rapid MVP 
          Delivery"
          
        />
        <HelperBox
          iconName={HiOutlinePaintBrush}
          title="Human-centered
          UI & UX"
        />
        <HelperBox
          iconName={FaRegCalendarAlt}
          title="4-Week
          Turnaround"
          
        />
        <HelperBox
          iconName={RxUpdate}
          title="Regular Updates 
          on Slack"
        />
        <HelperBox
          iconName={TbTestPipe}
          title="Weekly
          Test Version"
          
        />
        <HelperBox
          iconName={FaRegComments}
          title="App Store
          Ready"
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
