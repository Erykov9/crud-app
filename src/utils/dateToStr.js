const dateToStr = (dateObj) => {
  const date = dateObj.toLocaleDateString("en-US")
  return date
};

export default dateToStr;