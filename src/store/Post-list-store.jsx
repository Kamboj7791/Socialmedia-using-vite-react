import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  // fetching: false,
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListsprovider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(postListReducer, []);
  // const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPost = (posts) => {
    dispatchpostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       addInitialPost(result.posts);
  //       console.log(result);
  //       setFetching(false);
  //     });
  //   return () => {
  //     console.log("fetch aborted");
  //     controller.abort();
  //   };
  // }, []);
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        // fetching,
      }}>
      {children}{" "}
    </PostList.Provider>
  );
};

export default PostListsprovider;
