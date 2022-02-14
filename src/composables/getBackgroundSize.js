const getBackgroundSize = (width, height) => {
  if (width >= 1025 || (width >= 768 && width <= 1024 && width > height)) {
    return "desktop";
  } else if (width >= 768 && width <= 1024 && height > width) {
    return "tablet";
  } else if ((width >= 1 && width <= 480) || (width >= 481 && width <= 767)) {
    return "mobile";
  }
};

export default getBackgroundSize;
