import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  
  return (
    <footer className="mt-40 pb-5 flex justify-center items-center max-w-screen-xl mx-auto">
      <div className="flex items-center space-x-3">
        <Link
          to="/"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-blue-600 hover:text-white"
        >
          <MdOutlineEmail className="w-6 h-6" />
        </Link>
        <Link
          to="/"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-blue-600 hover:text-white"
        >
          <FaInstagram className="w-6 h-6" />
        </Link>
        <Link
          to="/"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-blue-600 hover:text-white"
        >
          <FaXTwitter className="w-6 h-6" />
        </Link>
        <Link
          to="/"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-blue-600 hover:text-white"
        >
          <FaYoutube className="w-6 h-6" />
        </Link>
        <Link
          to="/"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-blue-600 hover:text-white"
        >
          <FaGithub className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;