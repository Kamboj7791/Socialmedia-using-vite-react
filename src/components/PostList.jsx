import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import Welcomemessage from "./Welcomemessage";
import Loadingstate from "./Loadingstate";
import { useLoaderData } from "react-router-dom";

const postList = () => {
  // const handlePostClick = () => {};
  // const handlePostClick = () => {};
  const postList = useLoaderData();

  return (
    <>
      {/* {<Loadingstate></Loadingstate>} */}
      {postList.length == 0 && <Welcomemessage></Welcomemessage>}
      {postList.map((item) => (
        <Post key={item.id} post={item}></Post>
      ))}
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((result) => {
      return result.posts;
    });
};
export default postList;
