import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { fetchPosts, postAdded } from "../../store/postSlice";
import { Link } from "react-router-dom";
import TimeAgo from "../../components/TimeAgo";
import { ReactionButtons } from "../../components/post/ReactionButtons";

const MainPage = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  })

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <>Hi</>
    </div>
  );
};

export default MainPage;
