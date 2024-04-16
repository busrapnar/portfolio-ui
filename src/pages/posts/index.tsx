import React from "react";

type Props = {};

const Posts = (props: Props) => {
  return (
    <div className="mt-20">
      <h1 className="text-xl ">Blog yazıları ve kısa notlar</h1>
      <div>
        <article className="border-b border-b-zinc-200 py-4 sm:py-8 dark:border-b-zinc-800">
          <header>
            <h3 className="font-semibold text-lg underline">
              <a href="">Uyku ve Rızık</a>
            </h3>
            <p className="mt-1 text-lg opacity-70 dark:opacity-60">
              Gerçekten başarının şifresi erken uyanmak olabilir mi?
            </p>
          </header>
          <footer className="mt-1 flex items-center space-x-2 font-mono text-base uppercase tracking-wider opacity-50 dark:opacity-40">
            <time>15 Nisan 2023</time>
            <span>·</span>
            <span>2 min read</span>
            <span>·</span>
            <span>500 görüntüleme</span>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Posts;
