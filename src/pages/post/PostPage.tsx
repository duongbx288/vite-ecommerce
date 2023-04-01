import { useState } from "react";
import { Link } from "react-router-dom";
import TimeAgo from "../../components/TimeAgo";
import { ReactionButtons } from "../../components/post/ReactionButtons";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { postAdded } from "../../store/postSlice";


const PostPage = () => {
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [userId, setUserId] = useState("");

const list = useAppSelector((state) => state.post.list);
const orderedList = list.slice().sort((a, b) => b.date.localeCompare(a.date));

const users = useAppSelector((state) => state.users);

const dispatch = useAppDispatch();

const onTitleChanged = (e) => setTitle(e.target.value);
const onContentChanged = (e) => setContent(e.target.value);
const onAuthorChanged = (e) => setUserId(e.target.value);

const renderList = orderedList.map((item) => {
  return (
    <article className="post-excerpt" key={item.id}>
      <h3>{item.title}</h3>
      <p className="post-content">{item.content.substring(0, 100)}</p>
      <TimeAgo timestamp={item.date} />
      <ReactionButtons post={item} />s
      <Link to={`/vite-ecommerce/post/${item.id}`}>View Post</Link>
    </article>
  );
});

const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

const usersOptions = users.map((user) => (
  <option key={user.id} value={user.id}>
    {user.name}
  </option>
));

const onSavePostClicked = () => {
  if (title && content) {
    dispatch(postAdded(title, content, userId));

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
      <label htmlFor="postAuthor">Author:</label>
      <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
        <option value=""></option>
        {usersOptions}
      </select>
      <label htmlFor="postContent">Content:</label>
      <textarea
        id="postContent"
        name="postContent"
        value={content}
        onChange={onContentChanged}
      />
      <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
        Save Post
      </button>
    </form>
    {renderList}
  </div>
);
}

 export default PostPage;