import menuArr from "../util/StuffData/menu.json";
import methodStpes from "../util/StuffData/methodSteps.json";

const menuImgArr = Object.entries(menuArr).map(([name, data]) => ({
  name,
  img: data.find((item) => item.img)?.img,
}));

export const gifArr = Object.entries(methodStpes).flatMap(([name, steps]) =>
  steps.flatMap((step) =>
    step.step.filter((item) => item.gif).map((item) => ({ name: name, gif: item.gif }))
  )
);

export function preloadingMenuImg() {
  menuImgArr.forEach((img) => {
    const image = new Image();
    image.src = img.img;
  });
  console.log("Menu img preloaded.");
}

export const preloadImg = (imgAdd) => {
  let img = new Image();
  img.src = imgAdd;
  console.log("Final logo preloaded.");
};

export function getPreloadGifs() {}
