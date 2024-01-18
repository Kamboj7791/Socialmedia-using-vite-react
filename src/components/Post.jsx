import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { PostList } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}>
            <FaDeleteLeft />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags, index) => (
          <span key={index} className="badge bg-info text-dark hastag">
            {tags}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          this post is reacted by {post.reaction} people
        </div>
      </div>
    </div>
  );
};
export default Post;
