// Your code goes here

//MOUSEOVER
document.querySelector('nav').addEventListener('mouseover', 
    (event) => {event.target.style.color = "orange";
setTimeout(function() {
    event.target.style.color = "";
    }, 500);
    }, false);

//KEYDOWN
    document.addEventListener('keydown', event => {alert(` ${event.code}`)});

//WHEEL
  document.querySelector('.funBus').addEventListener('wheel',function (event) {
    event.preventDefault();
    let scale = 1;
  
    if (event.deltaY < 0) {
      // Zoom in
      scale *= event.deltaY * -2;
    }
    else {
      // Zoom out
      scale /= event.deltaY * 2;
    }
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 1);
  
    // Apply scale transform
    document.querySelector('.funBus').style.transform = `scale(${scale})`;
  });

//DRAG/Drop
document.querySelector('.imgone').addEventListener('drag', element => {
   element.target.style.zoom = '20%'
}, false);

//LOAD //Must Target Window, atleast on this example.
window.addEventListener('load', event => {alert(`WEBPAGE LOADED`)});

//FOCUS
// document.getElementById('btnOne').addEventListener('focus', (event) => {
//     event.target.style.zoom = '110%';    
// }, true);


//RESIZE
window.addEventListener('resize', (event) => {
    console.log(window.innerWidth);    
}, true);

//SCROLL
window.addEventListener("scroll", element => {
    var ypos = window.pageYOffset;
    if(ypos > 587) {
        document.getElementById("navContainerID").style.height = "70px";
    }
    else{
        document.getElementById("navContainerID").style.height = "150px";
    }
})

//SELECT


//DBLCLICK