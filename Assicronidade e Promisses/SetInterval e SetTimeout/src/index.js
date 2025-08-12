setTimeout(()=>{
    console.log('SetTimeout')
}, 2000)
clearTimeout(setTimeout)
let seconds = 0
setInterval(()=>{
    seconds +=2
    console.log('SetInterval')
if(seconds ===5){
    clearInterval(setInterval)
}
}, 2000)