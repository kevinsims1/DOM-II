// Your code goes here
document.querySelector('nav').addEventListener('mouseover', 
(event) => {event.target.style.color = "orange"
setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);