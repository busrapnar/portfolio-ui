import { Card, CardDescription } from "../../components/ui/card";
import ProductCard from "../../components/ProductCard";

const Projects = () => {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <Card className="px-6 py-10 ">
        <CardDescription className="text-xl">
          Kullanıcıların günlük yaşamlarını kolaylaştıran pratik özellikler
          sunan modern uygularımızı inceleyebilirsiniz. Kullanıcı dostu arayüzü
          ve güçlü altyapısıyla, kişisel gelişimden eğlenceye kadar geniş bir
          yelpazede kullanıcı ihtiyaçlarını karşılar.
        </CardDescription>
      </Card>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        <ProductCard
          imageUrl="https://www.codevisor.com.tr/wp-content/uploads/2022/11/mobil-uygulama-gelistirme.jpg"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://www.codevisor.com.tr/wp-content/uploads/2022/11/mobil-uygulama-gelistirme.jpg"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://www.codevisor.com.tr/wp-content/uploads/2022/11/mobil-uygulama-gelistirme.jpg"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://www.codevisor.com.tr/wp-content/uploads/2022/11/mobil-uygulama-gelistirme.jpg"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://www.codevisor.com.tr/wp-content/uploads/2022/11/mobil-uygulama-gelistirme.jpg"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://www.codevisor.com.tr/wp-content/uploads/2022/11/mobil-uygulama-gelistirme.jpg"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
      </div>
    </div>
  );
};

export default Projects;
