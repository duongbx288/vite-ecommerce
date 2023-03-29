import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";

export const PostDetail = () => {
  const { postId } = useParams();

  const post = useAppSelector((state) =>
    state.post.list.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <Link to={`/vite-ecommerce`}>Back</Link>
      <h1>Post Info: </h1>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
      <Link to={`/vite-ecommerce/editPost/${postId}`}>Edit</Link>
    </section>
  );
};
