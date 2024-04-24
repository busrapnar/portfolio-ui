
import InformationCard from "../../components/InformationCard";
import Sponsor from "../../components/Sponsor";
import Headers from "../../components/Headers";
import CourseItem from "../../components/CourseItem";
import { Card, CardDescription } from "../../components/ui/card";

const Videos = () => {
  return (
    <div className="flex flex-col  mt-20">
      <Card className=" px-6 py-10 border border-gray-300 opacity-80 rounded-lg">
        <CardDescription className="text-xl">
          Frontend ve Tasarım alanında ürettiğim eğitim videolarının tam
          listesi.
          <br />
          Youtube üzerinden izledikten sonra buradan işaretleyebilir ve düzenli
          olarak takip edebilirsiniz.
        </CardDescription>
      </Card>
          <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6">
          <InformationCard title="ABONE" informationPath="" information="31 B"/>
          <InformationCard title="IZLENME" informationPath="" information="1,3 Mn"/>
          </div>
          <Sponsor names={['Onurhan', 'Abdullah', 'Ahmet']} />
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
