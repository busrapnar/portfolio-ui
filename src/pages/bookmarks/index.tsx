import React from "react";
import InformationCard from "../../components/InformationCard";
import Sponsor from "../../components/Sponsor";
import { Card, CardDescription } from "../../components/ui/card";
import BookmarksPost from "../../components/BookmarksPost";

type Props = {};

const Bookmarks = (props: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <Card className="mt-10 px-6 py-10 border border-gray-300 bg-white opacity-80 rounded-lg">
        <CardDescription className="text-xl">
          Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam
          listesi.
          <br />
          Youtube üzerinden izledikten sonra buradan işaretleyebilir ve düzenli
          olarak takip edebilirsiniz.
        </CardDescription>
      </Card>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6">
        <InformationCard
          information="221 B"
          informationPath="https://unsplash.com/@birdilingilizce"
          title="GÖRÜNTÜLEME"
        />
        <InformationCard
          information="1 B"
          informationPath="https://unsplash.com/@birdilingilizce"
          title="INDIRME"
        />
      </div>
      <Sponsor names={["Onurhan", "Abdullah", "Ahmet"]} />
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
