
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn = document.querySelector("#btn");
const span = document.querySelector("#hex");
const b = document.querySelector('#background');

btn.addEventListener('click',()=>{

    let hexColor = "#";
    for (let i=0; i<6; i++){
        hexColor += hex[getRandomNum()];
    }
    span.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    btn.style.backgroundColor = hexColor;
})

function getRandomNum(){

    let num = Math.floor(Math.random() * hex.length);

    return num;
}


