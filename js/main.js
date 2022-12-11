const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

function showMenu() {
    menu.style.visibility = 'inherit';
}
btnMenu.addEventListener('click', ()=>{
    btnMenu.classList.toggle("is-active");
    menu.classList.toggle("active");
})