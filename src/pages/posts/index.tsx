import PostItem from "../../components/PostItem";

const Posts = () => {
  return (
      <div className="mt-10 flex flex-col gap-10">
      <h3 className="text-4xl font-bold tracking-wide">
        Blog yazıları ve kısa notlar
      </h3>
      <div>
      <PostItem
        title="Uyku ve Rızık"
        content="Gerçekten başarının şifresi erken uyanmak olabilir mi?"
        date="15 Nisan 2023"
        readTime="2 min read"
        link="/posts/post-detail"
      />
      <PostItem
        title="Uyku ve Rızık"
        content="Gerçekten başarının şifresi erken uyanmak olabilir mi?"
        date="15 Nisan 2023"
        readTime="2 min read"
        link="/#"
      />
      </div>
      </div>

  );
};

export default Posts;
