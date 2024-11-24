const clock = document.getElementById('clock')
// let date = new Date()
// console.log(date)

/* upper jitna kiya hai usse hame sirf console me date+time mil rha tha 
screen pe lane ke liye hamne (setInterval) ka use kiya or(toLocalString,toLocaleTimeString,localString) ye sab alag alag tarike hai time date batane ke */ 

// setInterval(function(){
//   let date = new Date()
//   clock.innerHTML = date.toLocaleString()
// },1000)

document.addEventListener('DOMContentLoaded', function () {
    const clock = document.getElementById('clock');
    const button = document.getElementById('TimeButton');
  
    
    button.addEventListener('click', function () {
      const date = new Date();
      clock.innerHTML = date.toLocaleString(); 
      clock.style.display = 'block'; 
    });
  });