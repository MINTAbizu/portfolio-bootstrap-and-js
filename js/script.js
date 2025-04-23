let words= document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters= word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span =document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});
let currentwordIndex=0;
let maxwordindex =words.length -1;
words[currentwordIndex].style.opacity="1";

let changetext=()=>{
    let currentword=words[currentwordIndex];
    let nextword =currentwordIndex===maxwordindex ? words[0]:words[currentwordIndex +1];
    Array.from(currentword.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
      } , i * 20);  
        });
        nextword.style.opacity="1";
        Array.from(nextword.children).forEach((letter,i)=>{
           letter.className= "letter behind";
           setTimeout(()=>{
            letter.className="letter in";
         }, 540 + i * 30);
           
        });
        currentwordIndex=currentwordIndex===maxwordindex ? 0:currentwordIndex +1;
    
};
changetext();
setInterval(changetext, 3000);






// circlr skill
const circle= document.querySelectorAll('circle');
circle.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent=Math.floor(dots*marked/100)
     var points=""
     var rotate =360/dots

     for(let i=0; i<=dots ;i++){
        // points+=`<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`
        points+=`<div class="points" style"--i:${i};--rot:${rotate}deg"></div>`
     }
     elem.innerHTML=points
})



window.addEventListener('scroll',function(){
    const banner= document.querySelector('banner');
    if(window.scrollY >50){
        banner.style.backgroundColor='blue'
    }else{
        banner.style.backgroundColor='orange'
    }
})


