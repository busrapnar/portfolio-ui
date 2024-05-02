import PostItem from "../../components/PostItem";

const postData = [
  {
    title: "Dijital Dönüşüm ve İnovasyon",
    content: "İnovasyonun önemi ve dijital dönüşüm sürecinde izlenmesi gereken adımlar.",
    date: "3 Aralık 2023",
    readTime: "6 min read",
    link: "/posts/post-detail"
  }
  ,
  {
    title: "Kahve ve Kitaplar",
    content: "Bir fincan kahve eşliğinde iyi bir kitapla zamanın tadını çıkarın.",
    date: "7 Ekim 2023",
    readTime: "5 min read",
    link: "/#"
  },
  {
    title: "Yoga ve Zihinsel Sağlık",
    content: "Yoga yaparak zihinsel sağlığınızı güçlendirin ve iç huzuru bulun.",
    date: "10 Kasım 2023",
    readTime: "4 min read",
    link: "/#"
  },
  {
    title: "Güneşin Altında: Seyahat Maceraları",
    content: "Bir günbatımı manzarasında ruhunuzu dinlendirin.",
    date: "22 Haziran 2023",
    readTime: "3 min read",
    link: "/#"
  }
  ,
  {
    title: "Mutlu ve Sağlıklı Yaşam İçin 10 İpucu",
    content: "Sağlıklı ve dengeli bir yaşam için 10 pratik ipucu.",
    date: "21 Ocak 2024",
    readTime: "3 min read",
    link: "/#"
  }
];

const Posts = () => {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <h3 className="text-4xl font-bold tracking-wide">
        Blog yazıları ve kısa notlar
      </h3>
      <div>
        {postData.map((post, index) => (
          <PostItem
            key={index}
            title={post.title}
            content={post.content}
            date={post.date}
            readTime={post.readTime}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
