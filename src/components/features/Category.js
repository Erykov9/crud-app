import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCategoryById } from "../../redux/categoriesRedux";
import PostCard from "./PostCard";
import shortid from "shortid";

const Category = () => {
  const { catId } = useParams();
  const category = useSelector(state => getCategoryById(state, catId));
  console.log(category)


  
  return (
    <div>
      <h2>Category: {catId}</h2>
      {category.map(cat => <PostCard key={shortid()} {...cat}/>)}
    </div>
  )
}

export default Category;