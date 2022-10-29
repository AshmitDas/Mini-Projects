const button = document.querySelector('button');
const heading = document.querySelector('h1');

button.addEventListener('click', () => {
    newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;
    heading.innerText = newColor;
})

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

