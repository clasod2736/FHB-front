import menuArr from "../util/StuffData/menu.json";

const menuImgArr = Object.entries(menuArr).map(([name, data]) => ({
  name,
  img: data.find((item) => item.img)?.img,
}));

export function preloadingMenuImg() {
  menuImgArr.forEach((img) => {
    const image = new Image();
    image.src = img;
  });
  console.log("Menu img preloaded.");
}

export const preloadImg = (imgAdd) => {
  let img = new Image();
  img.src = img;
  console.log("Final logo preloaded.");
};
