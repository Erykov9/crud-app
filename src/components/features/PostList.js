import PostCard from "./PostCard"
import { useSelector } from "react-redux";
import { getPosts } from "../../redux/postsRedux";

const PostList = (props) => {
  const postStore = useSelector(getPosts);

  return (
    <div className="d-flex justify-content-between flex-wrap">
      {postStore.map(post => <PostCard key={post.id} {...post}/>)}
    </div>
  )
}

export default PostList;