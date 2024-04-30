import { Card, CardDescription } from "../../components/ui/card";
import ProductCard from "../../components/ProductCard";


const Photos = () => {
  return (
    <div className="mt-20 z-10">
      <Card className="px-6 py-10 ">
      <CardDescription className="text-xl">
      Kullanıcıların günlük yaşamlarını kolaylaştıran pratik özellikler sunan modern uygularımızı inceleyebilirsiniz. Kullanıcı dostu arayüzü ve güçlü altyapısıyla, kişisel gelişimden eğlenceye kadar geniş bir yelpazede kullanıcı ihtiyaçlarını karşılar.
      </CardDescription>
      </Card>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
};

export default Photos;