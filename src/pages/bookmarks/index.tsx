import BookmarksPost from "../../components/BookmarksPost";
const bookmarksData = [
  {
    title: "atlassian/pragmatic-drag-and-drop",
    description: "Herhangi bir deneyim için herhangi bir teknoloji yığınında hızlı sürükle ve bırak",
    link: "https://github.com/atlassian/pragmatic-drag-and-drop",
    domain: "github.com",
    date: "1 gün önce"
  },
  {
    title: "react-icons: Iconic JSX Components",
    description: "React uygulamaları için SVG ikonlarının kolayca kullanılabilmesini sağlayan kütüphane",
    link: "https://github.com/react-icons/react-icons",
    domain: "github.com",
    date: "1 hafta önce"
  },
  {
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    description: "Yazılım geliştirme alanında klasik haline gelmiş, pratik ve zamanında test edilmiş ipuçları içeren kitap",
    link: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
    domain: "amazon.com",
    date: "1 ay önce"
  },
  {
    title: "JavaScript: The Good Parts",
    description: "JavaScript dilinin en iyi uygulamalarını öğrenmek için klasik kaynak",
    link: "https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742",
    domain: "amazon.com",
    date: "2 ay önce"
  },
  {
    title: "React Router: Declarative Routing for React.js",
    description: "React uygulamalarında bildirimsel yönlendirme sağlayan kütüphane",
    link: "https://reactrouter.com/",
    domain: "reactrouter.com",
    date: "3 ay önce"
  }
];

const Bookmarks = () => {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <h3 className="text-4xl font-bold tracking-wide">Son Eklenenler</h3>
      <div>
        {bookmarksData.map((bookmark, index) => (
          <BookmarksPost
            key={index}
            title={bookmark.title}
            description={bookmark.description}
            link={bookmark.link}
            domain={bookmark.domain}
            date={bookmark.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
