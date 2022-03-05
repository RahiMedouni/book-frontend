import PostCard from "./PostCard";
import PostAdd from "./PostAdd";

const PostList = (props) => {
  return (
    <div>
      <PostAdd handleAddPost={props.handleAddPost} />
      {props.posts.map((post, index) => (
        <PostCard index={index} key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
