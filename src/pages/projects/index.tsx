import InformationCard from "../../components/InformationCard";
import { Card, CardDescription } from "../../components/ui/card";
import ProductCard from "../../components/ProductCard";


const Photos = () => {
  return (
    <div className="mt-20 z-10">
      <Card className="px-6 py-10 ">
      <CardDescription className="text-xl">
      Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor.<br />
        Çevrem hakkında farkındalığı, detayları görebilmemi ve doğru anı yakalayabilmeyi öğretiyor
      </CardDescription>
      </Card>

      <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6">
        <InformationCard
          information="221 B"
          informationPath="https://unsplash.com/@birdilingilizce"
          title="UYGULAMA"
        />
        <InformationCard
          information="1 B"
          informationPath="https://unsplash.com/@birdilingilizce"
          title="INDIRME"
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
};

export default Photos;