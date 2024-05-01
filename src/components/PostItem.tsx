type Props = {
  title: string;
  content: string;
  date: string;
  readTime: string;
  link: string;
};

const PostItem = ({ title, content, date, readTime, link }: Props) => {
  return (
    
      <div>
        <article className="border-b py-4 sm:py-8 border-b-zinc-800">
          <header>
            <h3 className="font-semibold text-lg underline hover:text-indigo-500">
              <a href={link}>{title}</a>
            </h3>
            <p className="mt-1 text-lg text-gray-500">{content}</p>
          </header>
          <footer className="mt-1 flex items-center space-x-2 font-mono text-base uppercase tracking-wider text-gray-500/90">
            <time>{date}</time>
            <span>·</span>
            <span>{readTime}</span>
          </footer>
        </article>
      </div>

  );
};

export default PostItem;