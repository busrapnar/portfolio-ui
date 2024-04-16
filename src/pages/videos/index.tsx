import React from "react";
import Description from "../../components/Description";
import InformationCard from "../../components/InformationCard";
import Sponsor from "../../components/Sponsor";
import Headers from "../../components/Headers";
import CourseItem from "../../components/course-item/CourseItem";

type Props = {};

const Videos = (props: Props) => {
  return (
    <div className="mt-20">
        <Description content="Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam
          listesi.
          Youtube üzerinden izledikten sonra buradan işaretleyebilir ve düzenli
          olarak takip edebilirsiniz." />
          <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6">
          <InformationCard title="ABONE" informationPath="" information="31 B"/>
          <InformationCard title="IZLENME" informationPath="" information="1,3 Mn"/>
          </div>
          <Sponsor />
          <div>
          <Headers header="Frontend 101"/>

          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />

          </div>
          <div>
          <Headers header="Frontend 102"/>
          <div>
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          <CourseItem title="Sıfırdan CSS Eğitimi" videoCount="15 Videos" href="" />
          </div>
          </div>

    </div>
  );
};

export default Videos;
