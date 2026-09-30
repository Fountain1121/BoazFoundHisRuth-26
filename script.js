const $=id=>document.getElementById(id);
const ph=(a,b)=>'data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f5c4a"/><stop offset="1" stop-color="#c9a45c"/></linearGradient></defs><rect width="600" height="800" fill="url(#g)"/><text x="300" y="420" font-family="Georgia" font-size="90" fill="#fff" text-anchor="middle" font-style="italic">${a} &amp; ${b}</text><text x="300" y="480" font-family="Georgia" font-size="26" fill="#fff" text-anchor="middle">add your photo in ⚙</text></svg>`);
const def={n1:'Boaz',n2:'Ruth',d:'2026-10-31T11:00',v:'Love Country Church Dayspring, Haatso',m:'Two hearts, one story. Together with our families, we joyfully invite you to celebrate our wedding day.',
c:[['#6f52a3','Deep Lilac'],['#8d919b','Silver'],['#cdb8ee','Lilac']],dn:'Join us in shades of lilac and silver.',img:'images/couple.jpg',fly:'images/flyer.jpg'};
let S={...def};
try{const r=localStorage.getItem('wedx2');if(r)S={...def,...JSON.parse(r)}}catch(e){}
function down(file,max){return new Promise(res=>{const r=new FileReader();r.onload=()=>{const i=new Image();i.onload=()=>{const k=Math.min(1,max/Math.max(i.width,i.height)),c=document.createElement('canvas');c.width=i.width*k;c.height=i.height*k;c.getContext('2d').drawImage(i,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',.82))};i.src=r.result};r.readAsDataURL(file)})}
function render(){
 const r=document.documentElement.style;['c1','c2','c3'].forEach((k,i)=>r.setProperty('--'+k,S.c[i][0]));
 $('n1').textContent=S.n1;$('n2').textContent=S.n2;
 document.querySelectorAll('.n1').forEach(e=>e.textContent=S.n1);document.querySelectorAll('.n2').forEach(e=>e.textContent=S.n2);
 const src=S.img||ph(S.n1,S.n2);$('im').style.backgroundImage=$('ib').style.backgroundImage=`url("${src}")`;
 const D=new Date(S.d);$('dt').textContent=isNaN(D)?'':D.toLocaleDateString(undefined,{weekday:'long',day:'numeric',month:'long',year:'numeric'});
 $('tm').textContent=isNaN(D)?'':'at '+D.toLocaleTimeString([],{hour:'numeric',minute:'2-digit'});
 $('vn').textContent=S.v;$('msg').textContent=S.m;$('dress').textContent=S.dn;
 const f=$('fly');if(S.fly){f.style.backgroundImage=`url("${S.fly}")`;f.innerHTML=''}else{f.style.backgroundImage='';f.innerHTML='<i>Save the Date</i>'}
 $('sw').innerHTML=S.c.map(c=>`<div><div class="dot" style="background:${c[0]}"></div><b>${c[1]}</b><small>${c[0].toUpperCase()}</small></div>`).join('');
}
function tick(){const D=new Date(S.d),t=D-Date.now();if(isNaN(D)||t<0){$('count').innerHTML='';return}
 const u=[['Days',864e5],['Hrs',36e5],['Min',6e4],['Sec',1e3]];let x=t;
 $('count').innerHTML=u.map(([l,m])=>{const v=Math.floor(x/m);x-=v*m;return`<div><b>${v}</b><span>${l}</span></div>`}).join('')}
/* 3D tilt */
const T=$('tilt'),st=$('stage');
function tilt(x,y){T.style.transform=`rotateY(${x*22}deg) rotateX(${-y*22}deg)`;T.style.setProperty('--gx',50+x*50+'%');T.style.setProperty('--gy',50+y*50+'%');T.children[3].style.setProperty('--gx',50+x*50+'%');T.children[3].style.setProperty('--gy',50+y*50+'%')}
function pt(e){const b=st.getBoundingClientRect();tilt(Math.max(-1,Math.min(1,(e.clientX-b.left)/b.width*2-1)),Math.max(-1,Math.min(1,(e.clientY-b.top)/b.height*2-1)))}
document.addEventListener('pointermove',pt);
document.addEventListener('pointerleave',()=>tilt(0,0));
addEventListener('deviceorientation',e=>{if(e.gamma==null)return;tilt(Math.max(-1,Math.min(1,e.gamma/30)),Math.max(-1,Math.min(1,(e.beta-45)/30)))});
/* flip */
const fl=$('flip'),setF=b=>{fl.classList.toggle('on',b);$('t1').classList.toggle('ghost',b);$('t2').classList.toggle('ghost',!b)};
fl.onclick=()=>setF(!fl.classList.contains('on'));$('t1').onclick=()=>setF(false);$('t2').onclick=()=>setF(true);
/* editor */
function fill(){$('e1').value=S.n1;$('e2').value=S.n2;$('ed_d').value=S.d;$('ev').value=S.v;$('em').value=S.m;$('ed_n').value=S.dn;
 S.c.forEach((c,i)=>{$('k'+(i+1)).value=c[0];$('q'+(i+1)).value=c[1]})}
$('gear').onclick=()=>{fill();$('ed').classList.toggle('open')};
$('fi').onchange=async e=>{if(e.target.files[0]){S.img=await down(e.target.files[0],1000);render()}};
$('ff').onchange=async e=>{if(e.target.files[0]){S.fly=await down(e.target.files[0],1100);render();setF(true)}};
$('sv').onclick=()=>{S.n1=$('e1').value;S.n2=$('e2').value;S.d=$('ed_d').value;S.v=$('ev').value;S.m=$('em').value;S.dn=$('ed_n').value;
 S.c=[1,2,3].map(i=>[$('k'+i).value,$('q'+i).value]);render();tick();
 try{localStorage.setItem('wedx2',JSON.stringify(S))}catch(e){}$('ed').classList.remove('open')};
$('rs').onclick=()=>{try{localStorage.removeItem('wedx2')}catch(e){}S={...def};render();fill();tick()};
/* petals */
for(let i=0;i<12;i++){const p=document.createElement('div');p.className='petal';p.style.cssText=`left:${Math.random()*100}vw;width:${8+Math.random()*8}px;height:${12+Math.random()*8}px;border-radius:60% 0 60% 0;background:var(--c3);animation-duration:${9+Math.random()*10}s;animation-delay:-${Math.random()*15}s`;document.body.appendChild(p)}
render();tick();setInterval(tick,1000);