import menuArr from "../util/StuffData/menu.json";
import methodSteps from "../util/StuffData/MethodSteps.json";

const menuImgArr = Object.entries(menuArr).map(([name, data]) => ({
  name,
  img: data.find((item) => item.img)?.img,
}));

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

export function gifArr(methodName) {
  const methodObj = methodSteps[methodName];
  if (!methodObj) {
    return [];
  }

  const gifs = methodObj.flatMap(({ step }) => step.map(({ gif }) => gif)).filter(Boolean);

  gifs.forEach((gifUrl) => {
    const image = new Image();
    image.src = gifUrl;
  });

  return gifs;
}
