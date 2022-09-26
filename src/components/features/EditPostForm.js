import PostForm from "./PostForm";
import { useParams } from "react-router-dom";
import { getPostById } from "../../redux/postsRedux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editPost } from "../../redux/postsRedux";

const EditPostForm = () => {
  const { id } = useParams();
  const currentPost = useSelector(state => getPostById(state, id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(currentPost.category)

  const handleSubmit = post => {
    dispatch(editPost({...post, id}))
    navigate('/');
  }

  return (
    <>
      <PostForm action={handleSubmit} actionText='Edit post' title={currentPost.title} author={currentPost.author} publishDate={currentPost.publishDate} category={currentPost.category} shortDescription={currentPost.shortDescription} description={currentPost.description}/>
    </>
  )
}

export default EditPostForm;