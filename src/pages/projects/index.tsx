import { Card, CardDescription } from "../../components/ui/card";
import ProductCard from "../../components/ProductCard";

const Photos = () => {
  return (
    <div className="mt-20 z-10">
      <Card className="px-6 py-10 ">
        <CardDescription className="text-xl">
          Kullanıcıların günlük yaşamlarını kolaylaştıran pratik özellikler
          sunan modern uygularımızı inceleyebilirsiniz. Kullanıcı dostu arayüzü
          ve güçlü altyapısıyla, kişisel gelişimden eğlenceye kadar geniş bir
          yelpazede kullanıcı ihtiyaçlarını karşılar.
        </CardDescription>
      </Card>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
        <ProductCard
          imageUrl="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
        <ProductCard
          imageUrl="https://plus.unsplash.com/premium_photo-1676998930828-cabd06cb61c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Sanal Mağazalar"
          tags={["react", "java"]}
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus error beatae sed, odit necessitatibus explicabo iste delectus excepturi et perspiciatis non veniam optio porro! Sint incidunt expedita vero natus quod."
          path=""
        />
      </div>
    </div>
  );
};

export default Photos;
