import React from "react";

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
  clapCount,
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
          {description && <p className="mt-2 opacity-80">{description}</p>}
          <div className="mt-2 flex items-center space-x-2 font-mono text-sm opacity-60 dark:opacity-40">
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
      <button
        type="button"
        className="flex h-8 shrink-0 cursor-pointer items-center justify-center px-3 rounded-lg bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
      >
        <span className="flex select-none items-center gap-1 font-mono font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="opacity-80"
          >
            <path
              d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z"
              fill="currentColor"
              stroke-width="0"
            ></path>
          </svg>
          {clapCount}
        </span>
      </button>
    </article>
  );
};

export default BookmarksPost;
