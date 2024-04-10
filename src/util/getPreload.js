import FinishImg from "../../public/img/background/finalLogo2.jpg";

export function preloadingMenuImg(imageArr) {
  const result = imageArr.forEach((img) => {
    const image = new Image();
    image.src = img;
  });

  return result;
}

export const preloadImg = () => {
  let img = new Image();
  img.src = FinishImg;
};
