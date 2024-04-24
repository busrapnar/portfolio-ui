import { IconType } from "react-icons";

type Props = {
  title: string;
  iconName: IconType;
  addClass?: string,
};

const StackBox = ({ title, iconName: Icon, addClass }: Props) => {
  return (
    <div className={`w-[110px] h-[86px] flex flex-col gap-2 items-center justify-center py-2 px-4 border rounded-lg hover:bg-accent border-[#7d70b3] border-opacity-20 ${addClass}`}>
      <Icon size={36}/>
      <h1 className="text-base">{title}</h1>
    </div>
  );
};

export default StackBox;
