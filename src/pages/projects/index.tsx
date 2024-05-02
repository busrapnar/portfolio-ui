import { Card, CardDescription } from "../../components/ui/card";
import ProductCard from "../../components/ProductCard";

const productData = [
  {
    imageUrl: "https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Sanal Mağazalar",
    tags: ["react", "java"],
    description: "Farklı sektörler için özelleştirilebilir sanal mağaza çözümleri sunuyoruz. Mobil ve web platformlarında, kullanıcı dostu arayüzlerle güçlü altyapıları bir araya getirerek müşterilerinizin ihtiyaçlarını karşılıyoruz.",
    path: "/#"
  },
  {
    imageUrl: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Mobil Uygulama Geliştirme",
    tags: ["react", "java"],
    description: "Mobil uygulama geliştirme sürecinde size özel çözümler sunuyoruz. En son teknolojileri kullanarak iOS ve Android platformlarında güvenilir ve kullanıcı dostu mobil uygulamalar geliştiriyoruz.",
    path: "/#"
  },
  {
    imageUrl: "https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "E-ticaret Platformları",
    tags: ["react", "java"],
    description: "Çeşitli sektörler için özelleştirilebilir e-ticaret platformları geliştiriyoruz. Güçlü altyapılarımız ve kullanıcı dostu arayüzlerimizle müşterilerinizi çevrimiçi platformlara taşımanıza yardımcı oluyoruz.",
    path: "/#"
  }
];

const Projects = () => {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <Card className="px-6 py-10 rounded-xl">
        <CardDescription className="text-xl">
          Kullanıcıların günlük yaşamlarını kolaylaştıran pratik özellikler
          sunan modern uygularımızı inceleyebilirsiniz. Kullanıcı dostu arayüzü
          ve güçlü altyapısıyla, kişisel gelişimden eğlenceye kadar geniş bir
          yelpazede kullanıcı ihtiyaçlarını karşılar.
        </CardDescription>
      </Card>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            tags={product.tags}
            description={product.description}
            path={product.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
