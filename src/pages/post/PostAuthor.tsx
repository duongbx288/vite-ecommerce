import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/reduxHooks";

export const PostAuthor = ({ userId }) => {
  const author = useAppSelector((state) =>
    state.users.find((user) => user.id === userId)
  );

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
