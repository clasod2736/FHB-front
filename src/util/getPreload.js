export function preloadingMenuImg(imageArr) {
  const result = imageArr.forEach((img) => {
    const image = new Image();
    image.src = img;
  });

  return result;
}

export const preloadImg = (imgAdd) => {
  let img = new Image();
  img.src = img;
  console.log("Final logo preloaded.");
};
