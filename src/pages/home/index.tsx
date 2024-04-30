import SocialMedia from "../../components/SocialMedia";
import { FaAppStore, FaGooglePlay} from "react-icons/fa6";
import { FaRegComments,FaRegCalendarAlt} from "react-icons/fa";
import { CardDescription, CardTitle } from "../../components/ui/card";
import HelperBox from "../../components/HelperBox";
import { SlEnergy } from "react-icons/sl";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { RxUpdate } from "react-icons/rx";
import { TbTestPipe } from "react-icons/tb";
import StackBox from "../../components/StackBox";
import { PiHandHeartThin } from "react-icons/pi";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-wide">Biz Kimiz?</h1>
      <div className="flex gap-10">
          <div className="flex flex-col items-start gap-4 xl:w-2/3 w-full">
            <p className="text-lg leading-loose text-start text-muted-foreground ">
            Geleneksel ve çağın gerisinde kalmış ajanslardan sıkıldınız mı? Sizi ekibimizle tanıştıralım. <b className="border-b-4 border-indigo-500 text-white">Ankara</b>'da kurulmuş ve tam zamanlı olarak <b className="border-b-4 border-indigo-500 text-white">backend</b> ve <b className="border-b-4 border-indigo-500 text-white">front-end</b> alanlarında freelance hizmet sağlayan bir ekibiz. Eğer siz de hala aradığınız ekibi bulamadıysanız, doğru yerdesiniz!
            </p>
            <button className="flex items-center gap-2 border-4 border-indigo-500 px-4 py-2"><span className="text-lg">Tanışalım</span> <PiHandHeartThin size={24} className="text-indigo-500"/></button>
          </div>
          <div className="w-1/3 h-full hidden xl:block">
          <StackBox/>
          </div>
          
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
      <div className="mt-16 flex flex-col gap-4">
        <CardTitle className="font-bold text-3xl">
          Yenilikleri birlikte takip edelim!
        </CardTitle>
        <CardDescription className="font-normal text-base font-montserrat">
          Öğrendiğim şeylerle ilgili hazırladığım son içeriklerden anında
          haberdar olmak için sosyal medya hesabımı takip etmeyi unutma!
        </CardDescription>
      </div>
      <div className="mt-[-1.5rem] grid gap-8 md:grid-cols-1 lg:grid-cols-2 ">
        <SocialMedia
          iconName={FaGooglePlay}
          title="Google Play'de Uygulamalarımızı İncele"
          description="Uygulamalarımızı incelemek için projeler sayfasınnı ziyaret edebilir, Google Play'den uygulamalarımzı indirebilirsiniz"
          addClass="bg-gradient-to-l from-[#01875f] via-[#056559] to-[#01875f]"
          path="/projects"
        />
        <SocialMedia
          iconName={FaAppStore}
          title="App Store'da Uygulamalarımızı İncele"
          description="Uygulamalarımızı incelemek için projeler sayfasınnı ziyaret edebilir, App Store'dan uygulamalarımzı indirebilirsiniz"
          addClass="bg-gradient-to-l from-[#0470b9] via-[#057d93] to-[#035a95]"
          path="/projects"
        />
      </div>
    </div>
  );
};

export default Home;
