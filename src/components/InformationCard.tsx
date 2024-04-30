type Props = {
    informationPath:string,
    title:string, 
    information:string
};

const InformationCard = ({informationPath, title, information}: Props) => {
  return (
    <div>
      <a
        href={informationPath}
        className="flex flex-col gap-1 px-5 py-3 no-underline rounded-xl shadow-sm border  border-zinc-700  hover:bg-accent bg-zinc-700 hover:text-white dark:hover:text-zinc-50"
      >
        <h5 className="font-mono text-sm uppercase tracking-wider opacity-50">
          {title}
        </h5>
        <div className="text-xl font-semibold leading-none">{information}</div>
      </a>
    </div>
  );
};

export default InformationCard;
