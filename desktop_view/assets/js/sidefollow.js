const follow_toggle_open = () => {
    for (i=1;i<=5;i++){
        flw = document.getElementById(`flw${i}`);
        flw.style.transform = "translateY(0)";
        flw.style.opacity=1;
    }
}
const follow_toggle_close = () => {
    for (j=1,k=370;j<=5;j++,k-=60){
        flw = document.getElementById(`flw${j}`);
        flw.style.transform = `translateX(${k}px)`;
        flw.style.opacity=0;
    }
    setTimeout(()=>{
        for (j=1,k=370;j<=5;j++,k-=60){
            flw = document.getElementById(`flw${j}`);
            flw.style.transform = `translateY(${k}px)`;
            flw.style.opacity=0;
        }
    },300);
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