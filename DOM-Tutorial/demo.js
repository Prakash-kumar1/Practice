const mainButton = document.querySelector('button') ;
const body = document.body ;

const currentColor = document.querySelector(".current-color")


function randomColorGenerator(){
    const red = Math.floor(Math.random() * 256) ;
    const green = Math.floor(Math.random() * 256) ;
    const blue = Math.floor(Math.random() * 256) ;
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor ;
}

mainButton.addEventListener("click", ()=>{
    console.log("you clicked me!!!") ;

    const randomColor = randomColorGenerator() ;
    console.log(randomColor) ;

// for changing body color
body.style.backgroundColor = randomColor;

// for changing color value
currentColor.textContent = randomColor ;
})


