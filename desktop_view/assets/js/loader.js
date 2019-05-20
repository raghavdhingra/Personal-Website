const percent = document.getElementById("percent");
const pos = document.body.style;
const incrementor = () => {
    //Percentage Meter Perccentage
    var percent_val = 0;
    var per_int = setInterval(()=>{
        if (percent_val<40) {
            percent_val++;
            percent.innerText=`${percent_val}%`;
        }
        else {
            clearInterval(per_int);
        }
    },50);
    setTimeout(()=>{
        var per_sec_int = setInterval(()=>{
            if (percent_val < 50){
                percent_val++;
                percent.innerText=`${percent_val}%`;
            }
            else{
                clearInterval(per_sec_int);
            }
        },200);
    },2300);
    setTimeout(()=>{
        var per_third_int = setInterval(() => {
            if (percent_val<100) {
                percent_val++;
                percent.innerText=`${percent_val}%`;
            }
            else {
                clearInterval(per_third_int);
            }
        },5);
    },4200);

    //Percentage Meter Position
    var posX = 0;
    var pos_int = setInterval(()=>{
        if (posX<4) {
            posX+=0.01;
            pos.setProperty('--len',posX);
        }
        else {
            clearInterval(pos_int);
        }
    },5);
    setTimeout(()=>{
        var pos_sec_int = setInterval(()=>{
            if (posX < 5){
                posX+=0.01;
                pos.setProperty('--len',posX);
    
            }
            else{
                clearInterval(pos_sec_int);
            }
        },20);
    },2300);
    setTimeout(()=>{
        var pos_third_int = setInterval(() => {
            if (posX<10) {
                posX+=0.1;
                pos.setProperty('--len',posX);
    
            }
            else {
                clearInterval(pos_third_int);
            }
        },5);
    },4200);
}
document.body.onload = () => {
    incrementor();
}