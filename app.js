function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function () {
    const x = getRandomNumber();
    const y = getRandomNumber();
    const z = getRandomNumber();
    document.body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
    color.textContent = `rgb(${x}, ${y}, ${z})`;
});
