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

const close = () => {
    sidenav.style.marginLeft="-200px";
    toggle_1.classList.remove("close");
    toggle_2.classList.remove("close");
    toggle_1.classList.add("open");
    toggle_2.classList.add("open");
}
var x = 1;
document.getElementById("nav-toggle").addEventListener("click",()=>{
    if (x===1){
        open();
        x-=1;
    }
    else if (x===0){
        close();
        x+=1;
    }
});