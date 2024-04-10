export function preloadingImg(imageArr) {
  const result = imageArr.forEach((img) => {
    const image = new Image();
    image.src = img;
  });

  return result;
}
