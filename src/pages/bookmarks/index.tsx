import BookmarksPost from "../../components/BookmarksPost";


const Bookmarks = () => {
  return (
    <div className="flex flex-col gap-10 mt-20">
      <div className=" px-6 py-10 border border-gray-300/50 rounded-lg">
        <p className="text-xl text-opacity-80">
          Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam
          listesi.
          <br />
          Youtube üzerinden izledikten sonra buradan işaretleyebilir ve düzenli
          olarak takip edebilirsiniz.
        </p>
      </div>
      <div className="mt-10">
        <h3 className="text-3xl opacity-50">Son Eklenenler</h3>
        <div className="mt-5">
          <BookmarksPost
            title="atlassian/pragmatic-drag-and-drop"
            description="Fast drag and drop for any experience on any tech stack"
            link="https://github.com/atlassian/pragmatic-drag-and-drop"
            domain="github.com"
            date="1 gün önce"
            clapCount={0}
          />

          <BookmarksPost
            title="2024 Yerel Seçimi: Nasıl Görselleştirmeli?"
            link="https://www.denizcemonduygu.com/2024/04/2024-yerel-secimi-nasil-gorsellestirmeli/"
            domain="denizcemonduygu.com"
            date="4 gün önce"
            clapCount={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
