export const getCategory = ({category}) => category;
export const getCategoryById = ( {posts}, catId ) => posts.filter(post => post.category === catId);


const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;