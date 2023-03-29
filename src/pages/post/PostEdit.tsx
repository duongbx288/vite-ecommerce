import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { postUpdate } from "../../store/postSlice";

export const PostEdit = () => {
  const { postId } = useParams();

  const post = useAppSelector((state) =>
    state.post.list.find((post) => post.id === postId)
  );

  console.log(post);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdate({ id: postId, title, content }));
      navigate(`/vite-ecommerce/post/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
};
