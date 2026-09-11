
const members = [
  {id:'seolhong', name:'설홍', en:'SEOLHONG', symbol:'梅', available:false},
  {id:'yeowuyeon', name:'여우연', en:'YEO WOOYEON', symbol:'狐', available:false},
  {id:'eri', name:'최애리', en:'CHOI ERI', symbol:'E', available:false},
  {id:'ruchel', name:'루첼', en:'RUCHEL', symbol:'R', available:true},
  {id:'nunyo', name:'눈요', en:'NUNYO', symbol:'雪', available:false},
  {id:'nano', name:'나노', en:'NANO', symbol:'N', available:false},
];

const ruchelCategories = [
  {id:'anniversary', name:'1주년', en:'ANNIVERSARY', icon:'🎂'},
  {id:'maid', name:'메이드 카페', en:'MAID CAFE', icon:'🎀'},
  {id:'game', name:'게임', en:'GAME', icon:'🎮'},
  {id:'pokemon', name:'Pokémon GO', en:'POKÉMON GO', icon:'✨'},
  {id:'fanart', name:'팬아트', en:'FAN ART', icon:'🖼️'},
  {id:'daily', name:'일상 / 방송', en:'DAILY', icon:'☕'},
  {id:'special', name:'스페셜', en:'SPECIAL', icon:'✦'},
  {id:'etc', name:'기타', en:'ETC.', icon:'📎'},
];

const demoGallery = {
  anniversary:[
    {title:'1주년의 첫 장', date:'2026.09.07'},
    {title:'기억해두고 싶은 순간', date:'2026.09.07'},
    {title:'1st Anniversary', date:'2026.09.07'},
  ],
  maid:[
    {title:'메이드 카페', date:'2026.09'},
    {title:'손하트', date:'2026.09'},
  ],
  game:[
    {title:'오늘도 게임 중', date:'Archive'},
  ],
  pokemon:[],
  fanart:[],
  daily:[],
  special:[],
  etc:[]
};

const archiveScreen = document.getElementById('archiveScreen');
const memberScreen = document.getElementById('memberScreen');
const albumGrid = document.getElementById('albumGrid');
const categoryGrid = document.getElementById('categoryGrid');
const photoGrid = document.getElementById('photoGrid');
const backBtn = document.getElementById('backBtn');
const toast = document.getElementById('toast');
const galleryKicker = document.getElementById('galleryKicker');
const galleryTitle = document.getElementById('galleryTitle');
const galleryCount = document.getElementById('galleryCount');

function showToast(text){
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(()=>toast.classList.remove('show'),1800);
}

function renderAlbums(){
  albumGrid.innerHTML = '';
  members.forEach((m,index)=>{
    const button = document.createElement('button');
    button.className = `album-card ${m.available ? 'available':'locked'}`;
    button.innerHTML = `
      <div class="album-book">
        <div class="album-number">${String(index+1).padStart(2,'0')}</div>
        <div class="album-symbol">${m.symbol}</div>
        <div class="album-name">${m.name}</div>
        <div class="album-sub">${m.en}</div>
        <div class="album-state">${m.available ? 'OPEN ARCHIVE':'ARCHIVE PREPARING...'}</div>
      </div>
    `;
    button.addEventListener('click',()=>{
      if(!m.available){
        showToast(`${m.name} 앨범은 아직 준비 중입니다.`);
        return;
      }
      openMember(m);
    });
    albumGrid.appendChild(button);
  });
  document.getElementById('openCount').textContent = members.filter(m=>m.available).length;
}

function openMember(member){
  archiveScreen.classList.remove('active');
  memberScreen.classList.add('active');
  document.getElementById('memberName').textContent = member.en;
  window.scrollTo({top:0,behavior:'instant'});
  renderCategories();
  openCategory(ruchelCategories[0]);
}

function renderCategories(){
  categoryGrid.innerHTML='';
  ruchelCategories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.className='category-card';
    btn.dataset.id=cat.id;
    btn.innerHTML=`
      <div class="category-icon">${cat.icon}</div>
      <div class="category-name">${cat.name}</div>
      <div class="category-en">${cat.en}</div>
    `;
    btn.addEventListener('click',()=>openCategory(cat));
    categoryGrid.appendChild(btn);
  });
}

function openCategory(cat){
  [...categoryGrid.children].forEach(el=>el.classList.toggle('active',el.dataset.id===cat.id));
  galleryKicker.textContent=cat.en;
  galleryTitle.textContent=cat.name;
  const items=demoGallery[cat.id] || [];
  galleryCount.textContent=`${items.length} memories`;
  renderPhotos(items);
  if(window.scrollY>600){
    document.getElementById('gallerySection').scrollIntoView({behavior:'smooth',block:'start'});
  }
}

function renderPhotos(items){
  photoGrid.innerHTML='';
  if(!items.length){
    photoGrid.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">📷</div>
        <b>아직 이 챕터에는 사진이 없습니다.</b><br>
        <span>사진이 추가되면 이곳에 차곡차곡 쌓입니다.</span>
      </div>`;
    return;
  }
  const tilts=['-1.2deg','.7deg','-.4deg','1deg','-.8deg','.4deg'];
  items.forEach((item,index)=>{
    const card=document.createElement('article');
    card.className='photo-card';
    card.style.setProperty('--tilt',tilts[index%tilts.length]);
    card.innerHTML=`
      <div class="photo-placeholder">✦</div>
      <div class="photo-title">${item.title}</div>
      <div class="photo-meta">${item.date}</div>
    `;
    photoGrid.appendChild(card);
  });
}

backBtn.addEventListener('click',()=>{
  memberScreen.classList.remove('active');
  archiveScreen.classList.add('active');
  window.scrollTo({top:0,behavior:'instant'});
});

renderAlbums();
