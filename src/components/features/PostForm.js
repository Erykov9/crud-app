import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { addPost } from "../../redux/postsRedux";
import PropTypes from 'prop-types'

const PostForm = ({action, actionText, ...props}) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author ||'');
  const [date, setDate] = useState(props.publishDate || '');
  const [short, setShort] = useState(props.shortDescription || '');
  const [description, setDescription] = useState(props.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishDate: date, shortDescription: short, description });
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
        {actionText}
      </Button>
    </Form>
    </div>
  )
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  props: PropTypes.object,
}

export default PostForm;
