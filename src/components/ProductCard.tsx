import { Link } from 'react-router-dom';
type Props = {
    imageUrl: string;
    title: string;
    tags: string[];
    description: string;
	path: string;

};

const ProductCard= ({ imageUrl, title, tags, description, path } : Props) => {
  return (
      <div className="flex md:flex-row items-center rounded-xl p-3 h-full mx-auto border border-border bg-accent/20 ">
        <div className="md:w-5/12 hidden md:block ">
          <img src={imageUrl} className="rounded-[8px] w-full h-96" />
        </div>
        <div className=" md:w-7/12 justify-between flex flex-col space-y-2 p-3">
          <h3 className="font-bold md:text-3xl text-xl">{title}</h3>
          <div className='flex gap-2'>
            {tags.map((tag, index) => (
              <span key={index} className='bg-accent px-2 py-1'>#{tag}</span>
            ))}
          </div>
          <p className="md:text-lg text-gray-500 text-base">{description}</p>
          <Link to={path} className='border border-indigo-500 rounded-[6px] hover:bg-indigo-500  px-4 py-2 w-32 text-center '>Görüntüle</Link>
        </div>
      </div>
   
  );
};

export default ProductCard;