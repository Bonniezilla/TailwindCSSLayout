const toggleButton = document.querySelector('button');
const htmlEl = document.querySelector('html');

toggleButton.onclick = () => {
    htmlEl.classList.toggle('dark');
}