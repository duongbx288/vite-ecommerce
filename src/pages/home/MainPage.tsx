import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../../store/postSlice";
import { Link } from "react-router-dom";

const MainPage = () => {
  const list = useAppSelector((state) => state.post.list);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useAppDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const renderList = list.map((item) => {
    return (
      <article className="post-excerpt" key={item.id}>
        <h3>{item.title}</h3>
        <p className="post-content">{item.content.substring(0, 100)}</p>
        <Link to={`/vite-ecommerce/post/${item.id}`}>View Post</Link>
      </article>
    );
  });

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));

      setTitle("");
      setContent("");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <>Hi</>
      <form style={{ margin: "5px" }}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
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
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
      {renderList}
    </div>
  );
};

export default MainPage;
