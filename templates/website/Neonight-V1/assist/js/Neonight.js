var boxes=document.querySelectorAll("#bg-box");for(i=0;i<boxes.length;i++){animateMe(boxes[i])}
function animateMe(box){TweenMax.to(box,randomNumber(1,4),{opacity:randomNumber(0,0.8),delay:randomNumber(1,3),repeatDelay:randomNumber(1,2),repeat:1,yoyoEase:true,onComplete:animateMe,onCompleteParams:[box]})}
animateMe(document.querySelector("h1"))
function randomNumber(min,max){return Math.random()*(max-min)+min;}