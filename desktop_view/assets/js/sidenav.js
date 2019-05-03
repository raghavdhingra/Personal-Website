const sidenav = document.getElementById("sidenav");
const toggle_1 = document.getElementById("toggle-1");
const toggle_2 = document.getElementById("toggle-2");

const open = () => {
    sidenav.style.marginLeft="0"; 
    toggle_1.classList.remove("open");
    toggle_2.classList.remove("open");
    toggle_1.classList.add("close");
    toggle_2.classList.add("close");
}
