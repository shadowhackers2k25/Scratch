let btn = document.getElementById('Name');
let paragraph = document.querySelector('p');
function changeColor() {
    paragraph.style.color = 'red';
}
btn.onclick = changeColor;