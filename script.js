const letter=document.getElementById('letter');
const opener=document.getElementById('open-letter');
const readMore=document.getElementById('read-more');
function openLetter(){letter.hidden=false;opener.setAttribute('aria-expanded','true');readMore.setAttribute('aria-expanded','true');readMore.hidden=true;}
opener.addEventListener('click',()=>{openLetter();});
readMore.addEventListener('click',()=>{openLetter();letter.focus({preventScroll:true});});
if(location.hash==='#carta')openLetter();
const wish=document.getElementById('wish');
wish.addEventListener('click',()=>{
 document.getElementById('wish-answer').textContent='tomara q se realize, vc merece muito. feliz aniversário meu duo 😁';
 wish.textContent='aproveita seu dia 😁';
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const box=wish.getBoundingClientRect();
 for(let i=0;i<32;i++){const particle=document.createElement('i');particle.className='spark';particle.setAttribute('aria-hidden','true');particle.style.left=(box.left+box.width/2)+'px';particle.style.top=(box.top+box.height/2)+'px';const angle=Math.random()*Math.PI*2;const distance=60+Math.random()*180;particle.style.setProperty('--x',Math.cos(angle)*distance+'px');particle.style.setProperty('--y',(Math.sin(angle)*distance-70)+'px');document.body.appendChild(particle);setTimeout(()=>particle.remove(),1800);}
});

