import { Link } from "react-router-dom";

type Props = {
  imageUrl: string;
  title: string;
  tags: string[];
  description: string;
  path: string;
};

const ProductCardAlternative = ({
  imageUrl,
  title,
  tags,
  description,
  path,
}: Props) => {
  return (
    <div>
      <div className="flex items-center border rounded-xl bg-accent/40">
        <div className=" flex w-full max-w-[48rem] flex-row rounded-xl ">
          <div className=" m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none">
            <img
              src={imageUrl}
              alt="image"
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col justify-between">
            <h4 className="block text-2xl font-semibold leading-snug tracking-normal antialiased">
              {title}
            </h4>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-accent rounded-[4px] px-2 py-1 text-white text-opacity-60"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <p className="block h-28 text-ellipsis overflow-hidden leading-relaxed text-gray-700 ">
              {description}
            </p>
            <Link className="inline-block" to={path}>
              <button
                className="flex select-none items-center gap-2 rounded-[8px] py-3 px-6 text-center text-xs font-bold uppercase text-indigo-500 transition-all hover:bg-indigo-500/10 active:bg-indigo-500/30 border border-indigo-500/10"
                type="button"
              >
                Görüntüle
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardAlternative;
