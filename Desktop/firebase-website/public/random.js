// Small, fast random message function
function showRandom(){const messages=[
  "Hello from Firebase!",
  "Your hidden page was deployed.",
  "Fast and minimal."
];alert(messages[Math.floor(Math.random()*messages.length)]);}
document.addEventListener('DOMContentLoaded',function(){const b=document.getElementById('showBtn');if(b){b.addEventListener('click',showRandom);}});
