import { Link } from "react-router-dom";
import { FaXTwitter, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/ui/button";

const Footer = () => {
  const { i18n } = useTranslation();
  const clickHandle = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };
  return (
    <footer className="mt-40 pb-5 flex justify-between items-center max-w-screen-xl mx-auto ">
      <div className="flex items-center space-x-3">
        <Link
          to="mailto:birdilingilizce@gmail.com"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors  hover:bg-blue-600 hover:text-white"
        >
          <MdOutlineEmail className="w-6 h-6" />
        </Link>
        <Link
          to="https://instagram.com/birdilingilizce"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-blue-600 hover:text-white "
        >
          <FaInstagram className="w-6 h-6" />
        </Link>
        <Link
          to="https://twitter.com/birdilingilizce"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-blue-600 hover:text-white"
        >
          <FaXTwitter className="w-6 h-6" />
        </Link>
        <Link
          to="https://youtube.com/birdilingilizce"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-blue-600 hover:text-white"
        >
          <FaYoutube className="w-6 h-6" />
        </Link>
        <Link
          to="https://github.com/birdilingilizce"
          className="flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 no-underline transition-colors hover:bg-blue-600 hover:text-white"
        >
          <FaGithub className="w-6 h-6" />
        </Link>
      </div>
      <div className="flex gap-0 items-center">
        <Button variant={"ghost"} onClick={() => clickHandle("tr")}>
          <img
            className="w-12 h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/200px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png"
            alt=""
          />
        </Button>

        <Button variant={"ghost"} onClick={() => clickHandle("en")}>
          <img
            className="w-12 h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwN0E11tIN7wL2W3XWdyX-Y1PFvCjyfPSnwdr8sEkbRA3oio6Lft7SZlVxEoQ_vwXUoE&usqp=CAU"
            alt=""
          />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
