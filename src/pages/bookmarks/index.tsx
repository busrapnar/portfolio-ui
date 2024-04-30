import BookmarksPost from "../../components/BookmarksPost";


const Bookmarks = () => {
  return (

      <div className="mt-10 flex flex-col gap-10">
        <h3 className="text-4xl font-bold tracking-wide">Son Eklenenler</h3>
        <div >
          <BookmarksPost
            title="atlassian/pragmatic-drag-and-drop"
            description="Fast drag and drop for any experience on any tech stack"
            link="https://github.com/atlassian/pragmatic-drag-and-drop"
            domain="github.com"
            date="1 gün önce"
          />
          <BookmarksPost
            title="2024 Yerel Seçimi: Nasıl Görselleştirmeli?"
            link="https://www.denizcemonduygu.com/2024/04/2024-yerel-secimi-nasil-gorsellestirmeli/"
            domain="denizcemonduygu.com"
            date="4 gün önce"
          />
        </div>
      </div>

  );
};

export default Bookmarks;
