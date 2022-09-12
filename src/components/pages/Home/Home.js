import { Button, Container } from "react-bootstrap";
import Post from "../Post/Post";


const Home = () => { 

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h2>All Posts</h2>
        <Button variant="outline-info">Add Post</Button>
      </div>
      <Post/>
    </>
  )
}

export default Home;