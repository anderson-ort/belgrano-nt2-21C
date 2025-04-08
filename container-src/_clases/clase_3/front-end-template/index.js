// // agregado solo para jugar un poco con js y animations

const looperAnimation = (className) => {
    const element = document.querySelector(className);
    element.style.animation = 'none';

    void element.offsetWidth;
    element.style.animation = 'typing 2s steps(13), blink .5s step-end infinite alternate';
}

const timeSet = 0.25 * 60 * 1000

setInterval(looperAnimation, timeSet, ".typing-demo")