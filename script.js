function createBubbles(id, color='#00bfff', count=25){
  const container = document.querySelector(`#${id} .bubbles`);
  for(let i=0;i<count;i++){
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random()*90 + '%';
    bubble.style.width = bubble.style.height = (8 + Math.random()*12) + 'px';
    bubble.style.backgroundColor = color;
    bubble.style.animationDuration = (1.5 + Math.random()*1.5) + 's';
    container.appendChild(bubble);
    setTimeout(()=>bubble.remove(),2500);
  }
}

function createSediment(id, color='#fff', count=15){
  const container = document.querySelector(`#${id} .bubbles`);
  for(let i=0;i<count;i++){
    const sed = document.createElement('div');
    sed.style.width = sed.style.height = (10 + Math.random()*10)+'px';
    sed.style.backgroundColor = color;
    sed.style.position = 'absolute';
    sed.style.left = Math.random()*90+'%';
    sed.style.bottom = '0';
    sed.style.borderRadius = '50%';
    sed.style.animation = 'sediment 3s linear forwards';
    container.appendChild(sed);
    setTimeout(()=>sed.remove(),3000);
  }
}

function startSirkaSoda(){
  createBubbles('sirka-soda','#00bfff',25);
}
function startColaMentos(){
  createBubbles('cola-mentos','#ff0000',30);
}
function startSutLimon(){
  createBubbles('sut-limon','#ffff00',20);
  createSediment('sut-limon','#ffff80',15);
  document.getElementById('sut-limon').style.backgroundColor = 'rgba(255,255,0,0.2)';
}
function startTemirZang(){
  createSediment('temir-zang','#ff4500',20);
  document.getElementById('temir-zang').style.backgroundColor = 'rgba(255,69,0,0.2)';
}
function startMuzErish(){
  createBubbles('muz-erish','#00ffff',15);
}
function startShamYonishi(){
  createBubbles('sham-yonishi','#ffeb3b',20);
}
