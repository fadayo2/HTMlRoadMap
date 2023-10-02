const nightmode = () => {
    document.querySelector("body").style.backgroundColor = 'rgb(8, 2, 34';
    document.querySelector("body").style.color = 'white';
    document.getElementById('nightmode').style.display = 'none';
    document.getElementById('lightmode').style.display = 'flex';
}

const lightmode = () => {
    document.querySelector("body").style.color = 'black';
    document.querySelector('body').style.backgroundColor = 'white';
    document.getElementById('nightmode').style.display = 'flex';
    document.getElementById('lightmode').style.display = 'none';
}

const html = () =>{
    window.location.href = 'HTML.html'
}

const css = () =>{
    window.location.href = 'CSS.html'
}