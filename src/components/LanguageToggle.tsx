import { MdLanguage } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const onClick = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <MdLanguage className="h-[1.2rem] w-[1.2rem]  opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="grid gap-4">
          <button className="flex gap-1 items-center hover:bg-accent py-2 px-1" onClick={() => onClick("en")}>
            <img
              className="w-8 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
              alt=""
            />
            <span>English</span>
          </button>
       
          <button className="flex gap-1 items-center hover:bg-accent py-2 px-1" onClick={() => onClick("tr")}>
            <img
              className="w-8 h-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/240px-Flag_of_Turkey.svg.png"
              alt=""
            />
            <span>Türkçe</span>
          </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
