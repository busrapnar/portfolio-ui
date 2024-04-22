type Props = {
    imagePath:string
};

const PhotosCard = ({imagePath}: Props) => {
  return (
    <div>
      <a className="block overflow-hidden rounded-lg saturate-50 transition-all duration-700 hover:scale-105 hover:saturate-100">
        <img src={imagePath} />
      </a>
    </div>
  );
};

export default PhotosCard;
