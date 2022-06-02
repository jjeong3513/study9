const winScreen  = window.screen.height ; 
const winOuter = window.outerHeight;
const winInner = window.innerHeight; 

const outer = document.querySelector('#outer')
const box1 = outer.clientHeight; // padding 까지 포함한 넓이 
const box2 = outer.offsetWidth; //border 까지 포함한 넓이 
const box3 = outer.scrollHeight; //가시적인 부분의 넓이가 아닌  컨텐츠 영역의 크기를 가지고 온다. 
const box4 = outer.getBoundingClientRect().width; //  offsetWidth 같다  (단 트랜트폼 사용시 랜더링 된 사이즈를 받기 때문에 offset과 다르다 )
/* console.log(winScreen)
console.log(winOuter)
console.log(winInner) */
console.log(box1)
console.log(box2)
console.log(box3)
console.log(box4)