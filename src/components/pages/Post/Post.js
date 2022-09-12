import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import {  getPosts } from "../../../redux/postsRedux";
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import shortid from 'shortid'

const Post = () => {
  const postStore = useSelector(getPosts);

  const postId = postStore.map(post => post.id)
  console.log(postId)


  return (
    <div className="d-flex justify-content-between flex-wrap">
    {postStore.map(post => <Card key={post.id} style={{ width: '18rem' }} className="col-6 mb-3">
        <Card.Body>
          <Card.Title><strong>{post.title}</strong></Card.Title>
          <Card.Text><b>Author: </b>{post.author}</Card.Text>
          <Card.Text><b>Published: </b>{post.publishDate}</Card.Text>
          <Card.Text>
            {post.shortDescription}...
          </Card.Text>
          <Button as={NavLink} to={'/post/' + post.id}>Read more</Button>
        </Card.Body>
      </Card>)}
    </div>
  )
}

export default Post;