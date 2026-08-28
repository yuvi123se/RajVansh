const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu');
if(menu) menu.addEventListener('click',()=>nav.classList.toggle('open'));
const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.navlinks a').forEach(a=>{if(a.getAttribute('href')===path||(path===''&&a.getAttribute('href')==='index.html'))a.classList.add('active')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const cursor=document.querySelector('.cursor');
if(cursor){window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});document.querySelectorAll('a,.btn,.card,.person,.price-card').forEach(el=>{el.addEventListener('mouseenter',()=>{cursor.style.width='38px';cursor.style.height='38px'});el.addEventListener('mouseleave',()=>{cursor.style.width='22px';cursor.style.height='22px'})})}
document.querySelectorAll('[data-copy]').forEach(el=>el.addEventListener('click',async()=>{await navigator.clipboard.writeText(el.dataset.copy);const t=document.querySelector('.toast');if(t){t.textContent='Discord invite copied';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}}));
