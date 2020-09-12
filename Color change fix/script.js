let BtnRed = document.querySelector('#BtnRed');
let BtnPurple = document.querySelector('#BtnPurple');
let BtnGreen = document.querySelector('#BtnGreen');
let BtnReset = document.querySelector('#BtnReset');
let BtnRandom = document.querySelector('#BtnRandom');
let content = document.querySelector('p');


const colors = [
  'red',
  'purple',
  'green',
  'black',
]

/**
 * @description rendering colors 1 by 1 based on variabel in order
 */
// function listColor (element) {
//     const limit = 30
//     let iter = 0
//
//     const len = colors.length
//     const interval = setInterval (()=> {
//       const color = iter % len
//       console.log(color)
//       element.style.color = colors[color]
//       iter++
//       if (iter === limit)
//         clearInterval(interval)
//     }, 1000)
//   }

function randomizeColor (element) {
  const limit = 30
  let iter = 0
  const interval = setInterval(() => {

    const rand = Math.floor(Math.random() * (4 - 0) + 0)
    console.log(rand)
    element.style.color = colors[rand]
    iter++

    if (iter === limit) {
      clearInterval(interval)
    }
  }, 1000)
}

BtnRed.addEventListener('click',() => content.style.color = 'red');
BtnPurple.addEventListener('click',() => content.style.color = 'purple');
BtnGreen.addEventListener('click',() => content.style.color = 'green');
BtnReset.addEventListener('click',() => content.style.color = 'black');
BtnRandom.addEventListener ('click', ()=> randomizeColor(content))
