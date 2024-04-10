import menuArr from "../util/StuffData/menu.json";

const menuImgArr = Object.entries(menuArr).map(([name, data]) => ({
  name,
  img: data.find((item) => item.img)?.img,
}));

console.log(menuImgArr);

export function preloadingMenuImg() {
  menuImgArr.forEach((img) => {
    const image = new Image();
    image.src = img;
  });
}

export const preloadImg = (imgAdd) => {
  let img = new Image();
  img.src = img;
  console.log("Final logo preloaded.");
};
