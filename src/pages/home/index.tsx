import { CardDescription, CardTitle } from "../../components/ui/card";
import HelperBox from "../../components/HelperBox";
import { SlEnergy } from "react-icons/sl";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { TbTestPipe } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { FaAppStore, FaGooglePlay } from "react-icons/fa6";
import { PiHandHeartThin } from "react-icons/pi";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineCloud } from "react-icons/md";
import AppPlatform from "../../components/AppPlatform";
import StackBox2 from "../../components/StackBox2";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-wide text-white">Biz Kimiz?</h1>
        <div className="flex gap-10">
          <div className="flex flex-col items-start gap-8 xl:w-2/3 w-full">
            <p className="text-lg leading-loose text-start text-muted-foreground ">
              Geleneksel ve çağın gerisinde kalmış ajanslardan sıkıldınız mı?
              Sizi ekibimizle tanıştıralım.{" "}
              <b className="border-b-4 border-indigo-500 text-white">Ankara</b>
              'da kurulmuş ve tam zamanlı olarak{" "}
              <b className="border-b-4 border-indigo-500 text-white">mobil</b>{" "}
              alannında{" "}
              <b className="border-b-4 border-indigo-500 text-white">
                freelance
              </b>{" "}
              hizmet sağlayan bir ekibiz. Eğer siz de hala aradığınız ekibi
              bulamadıysanız, doğru yerdesiniz!
            </p>
            <Link to={"/contact"} className="flex items-center gap-2 border-4 border-indigo-500 px-4 py-2">
              <span className="text-lg text-white">Tanışalım</span>{" "}
              <PiHandHeartThin size={24} className="text-indigo-500" />
            </Link>
          </div>
          <div className="w-1/3 h-full hidden xl:block">
            <StackBox2 />
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-4">
        <CardTitle className="font-bold text-3xl text-white">Kendine değer kat!</CardTitle>
        <CardDescription className="font-normal text-base font-montserrat">
          İyi bir uygulama için, doğru bir başlangıç gerekir. Java ve React
          teknolojisinin gücünü kullanarak yaptığımız uygulamalar ile sizde
          doğru bir başlangıç yapmaya hazırsınız!
        </CardDescription>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        <HelperBox iconName={SlEnergy} title="Rapid MVP Delivery"/>
        <HelperBox iconName={HiOutlinePaintBrush}title="Human-centered UI & UX"/>
        <HelperBox iconName={IoCalendarOutline} title="Time Availability" />
        <HelperBox iconName={MdOutlineCloud} title="CI/CD Updates on Cloud" />
        <HelperBox iconName={TbTestPipe} title="Testable code" />
        <HelperBox iconName={CiPlay1} title="The Perfect Beginning" />
      </div>
      <div className="mt-16 flex flex-col gap-4">
        <CardTitle className="font-bold text-3xl">
          Yenilikleri birlikte takip edelim!
        </CardTitle>
        <CardDescription className="font-normal text-base font-montserrat">
          Yayınladığımız uygulamalara göz atabilir ve aklınızda ki uygulama
          fikirleri için bilgi edinebilirsiniz.
        </CardDescription>
      </div>
      <div className="mt-[-1.5rem] grid gap-8 md:grid-cols-1 lg:grid-cols-2 ">
        <AppPlatform
          iconName={FaGooglePlay}
          title="Google Play'de Uygulamalarımızı İncele"
          description="Uygulamalarımızı incelemek için projeler sayfasını ziyaret edebilir, Google Play'den uygulamalarımzı indirebilirsiniz"
          addClass="bg-gradient-to-l from-[#01875f] via-[#056559] to-[#01875f]"
          path="/projects"
        />
        <AppPlatform
          iconName={FaAppStore}
          title="App Store'da Uygulamalarımızı İncele"
          description="Uygulamalarımızı incelemek için projeler sayfasını ziyaret edebilir, App Store'dan uygulamalarımzı indirebilirsiniz"
          addClass="bg-gradient-to-l from-[#0470b9] via-[#057d93] to-[#035a95]"
          path="/projects"
        />
      </div>
    </div>
  );
};

export default Home;
