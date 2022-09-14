import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsRedux";
import shortid from "shortid";
import { Navigate, useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [short, setShort] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, author, date, short, description)
    dispatch(addPost({id: shortid(), title, author, publishDate: date, shortDescription: short, description }));
    navigate('/')
  }




  return (
    <div>
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 col-3">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" placeholder="Title" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3 col-3">
        <Form.Label>Author:</Form.Label>
        <Form.Control type="text" placeholder="Author" id="author" value={author} onChange={e => setAuthor(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3 col-3">
        <Form.Label>Publish date:</Form.Label>
        <Form.Control type="text" placeholder="Ex. 12.11.1994" id="date" value={date} onChange={e => setDate(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Short description:</Form.Label>
        <Form.Control type="text" placeholder="Short description" id="short" value={short} onChange={e => setShort(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" type="text" placeholder="Description" id="description" value={description} onChange={e => setDescription(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddPostForm;