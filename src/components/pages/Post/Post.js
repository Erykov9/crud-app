import { getPostById } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Button, Stack, Container } from "react-bootstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/postsRedux";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";


const Post = () => {
  const { id } = useParams();
  const postIdData = useSelector((state) => getPostById(state, id));
  const dispatch = useDispatch();


  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost(id));
  }


  if(!postIdData) return <Navigate to="/"/>
  return (
    <>
      <Container className="d-flex justify-content-between flex-wrap">
        <div className="d-flex justify-content-between flex-wrap">
          <Card key={postIdData.id} style={{ width: '24em' }} className="col-6 mb-3" border="light">
            <Card.Body>
              <Card.Title><strong>{postIdData.title}</strong></Card.Title>
              <Card.Text><b>Author: </b>{postIdData.author}</Card.Text>
              <Card.Text><b>Published: </b>{dateToStr(postIdData.publishDate)}</Card.Text>
              <Card.Text><b>Category: </b>{postIdData.category}</Card.Text>
              <Card.Text dangerouslySetInnerHTML={{ __html: postIdData.description }}>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Stack className="d-flex flex-row" style={{width: '20%'}}gap={1}>
            <Button variant="outline-info" as={NavLink} to={'/post/edit/' + id}>Edit</Button>
            <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
          </Stack>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={e => handleDelete(e)}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Post;