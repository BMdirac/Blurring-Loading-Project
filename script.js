const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0 // initialize

let int = setInterval(blurring, 30) // 30 miliseconds

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%` // this line code from top makes the text load from 0 to 100 ( note that innerHTML can also be use in replace of innerText)
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // background image is going to go from a blur of 30px to 0px in the same amount of time that the load goes from 0 to 100%
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` 
}

// stackoverflow.com ( note that this function scale should not be placed inside the blurring function)
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// ${} is the variable syntax
