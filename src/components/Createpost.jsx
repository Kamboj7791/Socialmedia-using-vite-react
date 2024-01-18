// import { useContext, useRef } from "react";
// import { PostList } from "../store/Post-list-store";
// import { useNavigate } from "react-router-dom";

import { Form, redirect } from "react-router-dom";

const Createpost = () => {
  // const navigation = useNavigate();
  // const { addPost } = useContext(PostList);
  // const postIdElement = useRef();
  // const postTitleElement = useRef();
  // const postBodyElement = useRef();
  // const PostReactionElement = useRef();
  // const postTagsElement = useRef();
  // const handleSumbit = (e) => {
  //   e.preventDefault();
  //   const postId = postIdElement.current.value;
  //   // console.log(postId);
  //   const postTitle = postTitleElement.current.value;
  //   const postBody = postBodyElement.current.value;
  //   const postReaction = PostReactionElement.current.value;
  //   const postTags = postTagsElement.current.value.split(" ");

  //   postIdElement.current.value = " ";
  //   postBodyElement.current.value = " ";
  //   PostReactionElement.current.value = " ";
  //   postTagsElement.current.value = " ";

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3  ">
        <label htmlFor="userId" className="form-label">
          userId
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          aria-describedby="emailHelp"
          placeholder="your user id"
          name="userId"
        />
      </div>
      <div className="mb-3  ">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="how are you feeling"
          name="title"
        />
      </div>
      <div className="mb-3  ">
        <label htmlFor="body" className="form-label">
          body
        </label>
        <textarea
          rows={4}
          type="email"
          className="form-control"
          id="body"
          aria-describedby="emailHelp"
          placeholder="tell us about it"
          name="body"
        />
      </div>
      <div className="mb-3  ">
        <label htmlFor="reaction" className="form-label">
          Number Of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          aria-describedby="emailHelp"
          placeholder="how many people reacted to this post"
          name="reaction"
        />
      </div>
      <div className="mb-3  ">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          aria-describedby="emailHelp"
          placeholder="please enter tags using space"
          name="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export const handleSumbit = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  // console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
};

export default Createpost;
