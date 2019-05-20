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
const tooltip = {
    tip1: document.getElementById("tip1"),
    tip2: document.getElementById("tip2"),
    tip3: document.getElementById("tip3"),
    tip4: document.getElementById("tip4"),
    tip5: document.getElementById("tip5"),
}
const icon = {
    icon1: document.getElementById("flw1"),
    icon2: document.getElementById("flw2"),
    icon3: document.getElementById("flw3"),
    icon4: document.getElementById("flw4"),
    icon5: document.getElementById("flw5"),
}
icon.icon1.onmouseover = () => {
    tooltip.tip1.style.opacity=1;
}
icon.icon1.onmouseout = () => {
    tooltip.tip1.style.opacity=0;    
}

icon.icon2.onmouseover = () => {
    tooltip.tip2.style.opacity=1;
}
icon.icon2.onmouseout = () => {
    tooltip.tip2.style.opacity=0;    
}

icon.icon3.onmouseover = () => {
    tooltip.tip3.style.opacity=1;
}
icon.icon3.onmouseout = () => {
    tooltip.tip3.style.opacity=0;    
}

icon.icon4.onmouseover = () => {
    tooltip.tip4.style.opacity=1;
}
icon.icon4.onmouseout = () => {
    tooltip.tip4.style.opacity=0;    
}

icon.icon5.onmouseover = () => {
    tooltip.tip5.style.opacity=1;
}
icon.icon5.onmouseout = () => {
    tooltip.tip5.style.opacity=0;    
}



//Pagination
setTimeout(()=>{
const pg1 = document.getElementById("page_1");
const pg2 = document.getElementById("page_2");
const pg3 = document.getElementById("page_3");
const pg3_click = () => {
    pg1.innerHTML="";
    pg2.innerHTML="";
    pg3.innerHTML=`<div class="active"></div>`;
}
const pg2_click = () => {
    pg1.innerHTML="";
    pg2.innerHTML=`<div class="active"></div>`;
    pg3.innerHTML="";
}
const pg1_click = () => {
    pg1.innerHTML=`<div class="active"></div>`;
    pg2.innerHTML="";
    pg3.innerHTML="";
}
pg3.onclick=pg3_click;
pg2.onclick=pg2_click;
pg1.onclick=pg1_click;
document.body.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 40){
        if (pg1.childElementCount > 0){
            pg2_click();
        }
        else if (pg2.childElementCount>0){
            pg3_click();
        }
        else if (pg3.childElementCount>0){
            pg1_click();
        }
    }
    else if (e.keyCode === 38){
        if (pg1.childElementCount > 0){
            pg3_click();
        }
        else if (pg2.childElementCount>0){
            pg1_click();
        }
        else if (pg3.childElementCount>0){
            pg2_click();
        }
    }};
},5000);
