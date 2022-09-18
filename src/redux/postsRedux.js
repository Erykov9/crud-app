import shortid from "shortid";


//selectors
export const getPosts = (state => state.posts)
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);


// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE = createActionName('DELETE');
const ADD = createActionName('ADD');
const EDIT = createActionName('EDIT');

export const editPost = payload => ({type: 'EDIT', payload});
export const deletePost = payload => ({type: 'DELETE', payload});
export const addPost = payload => ({type: 'ADD', payload})

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'DELETE':
      return statePart.filter(post => (post.id !== action.payload));
    case 'ADD':
      return [...statePart, {...action.payload, id: shortid()}];
    case 'EDIT':
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default postsReducer;