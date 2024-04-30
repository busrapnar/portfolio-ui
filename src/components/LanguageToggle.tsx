import { MdLanguage } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const clickHandle = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <MdLanguage className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all hover:-rotate-90 hover:scale-80 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => clickHandle("en")}>
          <div className="flex gap-1 items-center">
            <img
              className="w-8 h-6"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwN0E11tIN7wL2W3XWdyX-Y1PFvCjyfPSnwdr8sEkbRA3oio6Lft7SZlVxEoQ_vwXUoE&usqp=CAU"
              alt=""
            />
            <span>English</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => clickHandle("tr")}>
          <div className="flex gap-1 items-center">
            <img
              className="w-8 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg/200px-Flag_of_the_Ottoman_Empire_%281844%E2%80%931922%29.svg.png"
              alt=""
            />
            <span>Türkçe</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
