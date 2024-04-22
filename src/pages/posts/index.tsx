import React from "react";
import PostItem from "../../components/PostItem";
import { CardTitle } from "../../components/ui/card";

type Props = {};

const Posts = (props: Props) => {
  return (
    <div className="mt-20">
      <CardTitle className="font-semibold text-xl">
        Blog yazıları ve kısa notlar
      </CardTitle>
      <PostItem
        title="Uyku ve Rızık"
        content="Gerçekten başarının şifresi erken uyanmak olabilir mi?"
        date="15 Nisan 2023"
        readTime="2 min read"
        views="500"
        link="/#"
      />
      <PostItem
        title="Uyku ve Rızık"
        content="Gerçekten başarının şifresi erken uyanmak olabilir mi?"
        date="15 Nisan 2023"
        readTime="2 min read"
        views="500"
        link="/#"
      />
    </div>
  );
};

export default Posts;
