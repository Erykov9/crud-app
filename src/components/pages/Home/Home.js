import { Button, Container } from "react-bootstrap";
import PostList from "../../features/PostList";
import { NavLink } from "react-router-dom";


const Home = () => { 

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h2>All Posts</h2>
        <Button variant="outline-info" as={NavLink} to={'/post/add'}>Add Post</Button>
      </div>
      <PostList />
    </>
  )
}

export default Home;