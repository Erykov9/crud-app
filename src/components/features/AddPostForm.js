import PostForm from "./PostForm.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux.js";

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/')
  };

  return (
    <PostForm action={handleSubmit} actionText='Add Post'></PostForm>
  )
}

export default AddPostForm;