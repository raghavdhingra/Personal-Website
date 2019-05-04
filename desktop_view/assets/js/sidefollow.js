const flw1 = document.getElementById("flw1");
const flw2 = document.getElementById("flw2");
const flw3 = document.getElementById("flw3");
const flw4 = document.getElementById("flw4");
const flw5 = document.getElementById("flw5");

const follow_toggle_open = () => {
    flw1.style.top=0;
    flw2.style.top=0;
    flw3.style.top=0;
    flw4.style.top=0;
    flw5.style.top=0;
    flw1.style.opacity=1;
    flw2.style.opacity=1;
    flw3.style.opacity=1;
    flw4.style.opacity=1;
    flw5.style.opacity=1;
}
const follow_toggle_close = () => {
    flw1.style.top="380px";
    flw2.style.top="310px";
    flw3.style.top="250px";
    flw4.style.top="190px";
    flw5.style.top="130px";
    flw1.style.opacity=0;
    flw2.style.opacity=0;
    flw3.style.opacity=0;
    flw4.style.opacity=0;
    flw5.style.opacity=0;
}
var y = 1;
const follow_toggle = () => {
    if (y === 1) {
        follow_toggle_open();
        y-=1;
    }
    else if ( y === 0 ) {
        follow_toggle_close();
        y+=1;
    }
}