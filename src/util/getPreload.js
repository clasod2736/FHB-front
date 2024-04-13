import menuArr from "../util/StuffData/menu.json";
import methodSteps from "../util/StuffData/MethodSteps.json";

const menuImgArr = Object.entries(menuArr).map(([name, data]) => ({
  name,
  img: data.find((item) => item.img)?.img,
}));

export function preloadingMenuImg() {
  console.log(menuImgArr);
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
  // methodName에 해당하는 객체를 찾습니다.
  const methodObj = methodSteps[methodName];
  if (!methodObj) {
    // methodName에 해당하는 객체가 없으면 빈 배열을 반환합니다.
    return [];
  }

  // methodName에 해당하는 객체의 "step" 배열을 가져와서 각 항목에서 gif 값을 추출합니다.
  const gifs = methodObj.flatMap(({ step }) => step.map(({ gif }) => gif));

  // 추출된 gif 값을 가지고 있는 배열을 반환합니다.
  return gifs;
}
