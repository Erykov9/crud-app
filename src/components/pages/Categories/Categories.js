import { getCategory } from "../../../redux/categoriesRedux";
import { useSelector } from "react-redux";
import shortid from "shortid";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Categories = () => {
  const category = useSelector(getCategory);


  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {category.map(cat => <li key={shortid()}><Nav.Link as={NavLink} to={`/categories/${cat}` }>{cat}</Nav.Link></li>)}
      </ul>
    </div>
  )
}

export default Categories;