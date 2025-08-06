function getImgUrl(imageName) {
  return new URL(`../assets/products/${imageName}`, import.meta.url).href;
}
export {getImgUrl};
