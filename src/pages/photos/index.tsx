import PhotosCard from "../../components/PhotosCard";
import InformationCard from "../../components/InformationCard";
import { Card, CardDescription } from "../../components/ui/card";


const Photos = () => {
  return (
    <div className="mt-20">
      <Card className="px-6 py-10 ">
      <CardDescription className="text-xl">
      Fotoğraf çekmek etrafımdaki şeyleri daha iyi görmemi sağlıyor.<br />
        Çevrem hakkında farkındalığı, detayları görebilmemi ve doğru anı yakalayabilmeyi öğretiyor
      </CardDescription>
      </Card>

      <div className="mt-20 grid grid-cols-2 gap-4 sm:gap-6">
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
      <div className="mt-20 grid items-end gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 md:gap-y-20 lg:grid-cols-4">
        <PhotosCard imagePath="https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <PhotosCard imagePath="https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <PhotosCard imagePath="https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <PhotosCard imagePath="https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <PhotosCard imagePath="https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <PhotosCard imagePath="https://images.unsplash.com/photo-1509514026798-53d40bf1aa09?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    </div>
  );
};

export default Photos;