

//selectors
export const getPosts = (state => state.posts)
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);


// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE = createActionName('DELETE')
const ADD = createActionName('ADD')
export const deletePost = payload => ({type: 'DELETE', payload});
export const addPost = payload => ({type: 'ADD', payload})

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'DELETE':
      return statePart.filter(post => (post.id !== action.payload));
    case 'ADD':
      return [...statePart, {...action.payload}]
    default:
      return statePart;
  };
};

export default postsReducer;