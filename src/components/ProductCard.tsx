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
    <div className="flex flex-col bg-accent/20">
      <div className="flex md:flex-row rounded-xl  p-3 mx-auto border border-border">
        <div className="md:w-5/12 h-full hidden md:block rounded-lg ">
          <img src={imageUrl} className="rounded-[4px] w-full h-full" />
        </div>
        <div className="w-full md:w-7/12 justify-center flex flex-col space-y-2 p-3">
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
    </div>
  );
};

export default ProductCard;