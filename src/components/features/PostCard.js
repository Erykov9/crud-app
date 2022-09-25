import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import dateToStr from "../../utils/dateToStr";

const PostCard = (props) => {
  return (
    <div>
        <Card key={props.id} style={{ width: '18rem' }} className="col-6 mb-3">
        <Card.Body>
          <Card.Title><strong>{props.title}</strong></Card.Title>
          <Card.Text><b>Author: </b>{props.author}</Card.Text>
          <Card.Text><b>Published: </b>{dateToStr(props.publishDate)}</Card.Text>
          <Card.Text>
            {props.shortDescription}...
          </Card.Text>
          <Button as={NavLink} to={'/post/' + props.id}>Read more</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PostCard;
