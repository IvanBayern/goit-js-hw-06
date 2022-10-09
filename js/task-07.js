// const rangeRef = document.querySelector('#font-size-control');
// const spanRef = document.querySelector('#text');
// let fontSize = String(Math.round(parseFloat(rangeRef.value))) + 'px';
// spanRef.style.fontSize = fontSize;

// rangeRef.addEventListener('input', even => {
//   fontSize = String(Math.round(parseFloat(even.currentTarget.value))) + 'px';
//   spanRef.style.fontSize = fontSize;
// });


const fontSizeControllRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControllRef.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.target.value}px`;
});