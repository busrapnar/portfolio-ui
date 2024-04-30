type PostProps = {
  title: string;
  description?: string;
  link: string;
  domain: string;
  date: string;
  clapCount: number;
};

const BookmarksPost = ({
  title,
  description,
  link,
  domain,
  date,
}: PostProps) => {
  return (
    <article className="flex items-center gap-6 py-4 sm:py-6 md:gap-10 border-b border-b-zinc-200/60 dark:border-b-zinc-800">
      <div className="flex grow items-center gap-4">
        <div className="grow">
          <h3 className="font-semibold">
            <a
              href={link}
              className="decoration-zinc-600 visited:decoration-zinc-200 dark:visited:decoration-zinc-800"
              rel="noopener noreferrer"
              target="_blank"
            >
              {title}
            </a>
          </h3>
          {description && <p className="mt-2 text-white text-opacity-80">{description}</p>}
          <div className="mt-2 flex items-center space-x-2 font-mono text-sm text-white text-opacity-60 dark:opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M3.6 9h16.8"></path>
              <path d="M3.6 15h16.8"></path>
              <path d="M11.5 3a17 17 0 0 0 0 18"></path>
              <path d="M12.5 3a17 17 0 0 1 0 18"></path>
            </svg>
            <span>{domain}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
      
    </article>
  );
};

export default BookmarksPost;
