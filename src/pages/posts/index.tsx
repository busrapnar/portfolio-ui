import PostItem from "../../components/PostItem";
import { CardTitle } from "../../components/ui/card";

const Posts = () => {
  return (
    <div className="flex flex-col gap-20 mt-20">
        <div className="py-10 flex flex-col gap-10">
          <div className="text-xl leading-relaxed md:text-justify text-center">
          Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam
          listesi.
          <br />
          Youtube üzerinden izledikten sonra buradan işaretleyebilir ve düzenli
          olarak takip edebilirsiniz.
        </div>
      </div >
      <div className="mt-10">
      <CardTitle className="font-semibold text-xl">
        Blog yazıları ve kısa notlar
      </CardTitle>
      <PostItem
        title="Uyku ve Rızık"
        content="Gerçekten başarının şifresi erken uyanmak olabilir mi?"
        date="15 Nisan 2023"
        readTime="2 min read"
        views="500"
        link="/posts/post-detail"
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
