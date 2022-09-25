import { Form } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const PostForm = ({action, actionText, ...props}) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author ||'');
  const [date, setDate] = useState(props.publishDate || '');
  const [short, setShort] = useState(props.shortDescription || '');
  const [description, setDescription] = useState(props.description || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    setContentError(!description);
    setDateError(!date);
    if (description && date) {
      action({ title, author, publishDate: date, shortDescription: short, description })
    }
  }

  const { register, handleSubmit: validate, formState: {errors}} = useForm();

  return (
    <div>
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3 col-3">
        <Form.Label>Title:</Form.Label>
        <Form.Control
        {...register("title", {required: true, minLength: 3 })}
        type="text" 
        placeholder="Title"
        id="title" 
        value={title} 
        onChange={e => setTitle(e.target.value)}/>
        {errors.title && <small className="d-block form-text text-danger mt-2">This field is required and should be at least 3 letters long</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-3">
        <Form.Label>Author:</Form.Label>
        <Form.Control 
        {...register("author", {required: true, minLength: 3})}
        type="text" 
        placeholder="Author" 
        id="author" 
        value={author} 
        onChange={e => setAuthor(e.target.value)}/>
        {errors.author && <small className="d-block form-text text-danger mt-2">This field is required and should be at least 3 letters long</small>}
      </Form.Group>

      <Form.Group className="mb-3 col-3">
        <Form.Label>Publish date:</Form.Label>
        <DatePicker 
        selected={date} 
        onChange={(d) => setDate(d)}/>
        {dateError && <small className="d-block form-text text-danger mt-2">Date cannot be empty</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Short description:</Form.Label>
        <Form.Control 
        {...register("short", {required: true, minLength: 20})}
        type="text" 
        placeholder="Short description" 
        id="short" 
        value={short} 
        onChange={e => setShort(e.target.value)}/>
         {errors.short && <small className="d-block form-text text-danger mt-2">This field is required and should be at least 20 letters long</small>}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description:</Form.Label>
        <ReactQuill theme="snow" value={description} onChange={setDescription} />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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
