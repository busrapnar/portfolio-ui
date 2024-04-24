import PostItem from "../../components/PostItem";
import { Card, CardDescription, CardTitle } from "../../components/ui/card";

const Posts = () => {
  return (
    <div className="flex flex-col gap-20 mt-20">
      <Card className=" px-6 py-10 border border-gray-300 opacity-80 rounded-lg">
        <CardDescription className="text-xl">
          Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam
          listesi.
          <br />
          Youtube üzerinden izledikten sonra buradan işaretleyebilir ve düzenli
          olarak takip edebilirsiniz.
        </CardDescription>
      </Card>
      <div>
      <CardTitle className="font-semibold text-xl">
        Blog yazıları ve kısa notlar
      </CardTitle>
      <PostItem
        title="Uyku ve Rızık"
        content="Gerçekten başarının şifresi erken uyanmak olabilir mi?"
        date="15 Nisan 2023"
        readTime="2 min read"
        views="500"
        link="/#"
      />
      <PostItem
        title="Uyku ve Rızık"
        content="Gerçekten başarının şifresi erken uyanmak olabilir mi?"
        date="15 Nisan 2023"
        readTime="2 min read"
        views="500"
        link="/#"
      />
      </div>
    </div>
  );
};

export default Posts;
