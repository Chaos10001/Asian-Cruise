const loadtext=document.getElementById('.loading-text')
const bg=document.getElementById('.bg')

let load=0

let init=setInterval(blurring,30)
function blurring() {
    load++


    if (load>99) {
        clearInterval(init)
        
    }
    loadtext.innerText=`${load}%`
    loadtext.style.opacity=scale(load,0 , 100 , 1 , 0)
    bg.style.filter=`blur(${scale(load,0 ,100 ,30 ,0)}px)`
    
}
const scale= (num, in_min, in_max ,out_min,out_max)=>{
    return(num - in_min) * (out_max - out_min) /(in_max - in_min)
    + out_min;

}
