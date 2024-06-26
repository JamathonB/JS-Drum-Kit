function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) return; // Stops the function from running.
    audio.currentTime = 0;
    audio.play();    
    key.classList.add('playing'); // Begins transition
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip it if it's not a transform
    this.classList.remove('playing'); // Stops the transition
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);