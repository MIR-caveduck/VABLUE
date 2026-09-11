const MEMBERS=[
{id:"eri",name:"최애리",en:"CHOI ERI",mark:"🍒",p:"#AB3E1A",s:"#D2B595",open:false},
{id:"nunyo",name:"눈요",en:"NUNYO",mark:"❄️🐇",p:"#F0FDFC",s:"#77A0FD",open:false},
{id:"yeowuyeon",name:"여우연",en:"YEO WOOYEON",mark:"💎🦊",p:"#C9DFEA",s:"#F0F8FD",open:true,hero:"images/yeowuyeon/hero.webp",date:"VABLUE ACADEMY",quote:"“산과 계절, 그리고 너. 항상 여기 있어.”},
{id:"seolhong",name:"설홍",en:"SEOLHONG",mark:"🌺",p:"#B64659",s:"#FF92A7",open:false},
{id:"nano",name:"나노",en:"NANO",mark:"✖️🖤",p:"#E06064",s:"#373543",open:true,hero:"images/nano/hero.webp",date:"2025.09.06 —",quote:"“달콤한 유혹은, 언제나 너로부터.”},
{id:"ruchel",name:"루첼",en:"RUCHEL",mark:"💀🍓",p:"#A3233E",s:"#272332",open:true,hero:"images/ruchel/ruchel-hero.webp",date:"2025.09.07 —",quote:"“기억하고 싶은 장면들을 한 권에.”}
];

const ITEMS=[{"cat":"ruchel","title":"고등학생 루첼","src":"images/ruchel/ruchel/01-highschool.webp","memo":"벚꽃길을 걷던, 아직 교복이 가장 자연스러운 시절.","date":"2026.09.11"},{"cat":"ruchel","title":"VABLUE 캠퍼스의 루첼","src":"images/ruchel/ruchel/02-campus.webp","memo":"캠퍼스의 봄날. 그런데 왼쪽 아래 고양이 앞발바닥이 존재감을 다 가져갔다.","date":"2026.09.11"},{"cat":"ruchel","title":"야간 편의점 알바 루첼","src":"images/ruchel/ruchel/03-parttime.webp","memo":"늦은 시간의 편의점도, 루첼이 있으면 조금은 따뜻해진다.","date":"2026.09.11"},{"cat":"ruchel","title":"직장인 루첼","src":"images/ruchel/ruchel/04-office.webp","memo":"바쁜 오피스의 하루. 그래도 고양이는 빠질 수 없다.","date":"2026.09.11"},{"cat":"ruchel","title":"퇴근 후 방송하는 루첼","src":"images/ruchel/ruchel/05-broadcast.webp","memo":"하루 끝에 가장 편안해지는 순간. 결국 돌아오는 곳은 방송 앞.","date":"2026.09.11"},{"cat":"species","title":"설표 루첼","src":"images/ruchel/species/01.webp","memo":"설원에서도 새침한 건 그대로.","date":"2026.09.11"},{"cat":"species","title":"브라키오사우르스 루첼","src":"images/ruchel/species/02.webp","memo":"목이 길어져도 루첼은 루첼.","date":"2026.09.11"},{"cat":"species","title":"햄스터 루첼","src":"images/ruchel/species/03.webp","memo":"작고 말랑한 부족장님.","date":"2026.09.11"},{"cat":"species","title":"고양이 루첼","src":"images/ruchel/species/04.webp","memo":"사랑받는 게 당연한 고양이.","date":"2026.09.11"},{"cat":"species","title":"루돌프 루첼","src":"images/ruchel/species/05.webp","memo":"올겨울도 길 잃을 걱정은 없겠다.","date":"2026.09.11"},{"cat":"jobs","title":"골골이호 선장 루첼","src":"images/ruchel/jobs/01.webp","memo":"오늘도 골골이호는 순항 중.","date":"2026.09.11"},{"cat":"jobs","title":"해군제독 루첼","src":"images/ruchel/jobs/02.webp","memo":"작아도 계급은 제독입니다.","date":"2026.09.11"},{"cat":"jobs","title":"골골이호 선원 루첼","src":"images/ruchel/jobs/03.webp","memo":"오늘도 출항 준비 완료.","date":"2026.09.11"},{"cat":"jobs","title":"무희 루첼","src":"images/ruchel/jobs/04.webp","memo":"한 번쯤 보고 싶었던 무대 위 루첼.","date":"2026.09.11"},{"cat":"jobs","title":"루첼 모음","src":"images/ruchel/jobs/05.webp","memo":"한 장에 모아둔 여러 모습의 루첼.","date":"2026.09.11"},{"cat":"fantasy","title":"설원의 야만전사 루첼","src":"images/ruchel/fantasy/01-barbarian.webp","memo":"눈보라 한가운데서도 물러설 생각은 없는 야만전사.","date":"2026.09.11"},{"cat":"fantasy","title":"설산 야전의 루첼과 설표","src":"images/ruchel/fantasy/02-snowfield.webp","memo":"설표와 함께라면 설산의 야전도 제법 든든하다.","date":"2026.09.11"},{"cat":"fantasy","title":"원소 정령사 루첼","src":"images/ruchel/fantasy/03-elementalist.webp","memo":"원소마다 고양이 하나씩. 정령사의 취향이 너무 확실하다.","date":"2026.09.11"},{"cat":"fantasy","title":"마법서재의 마법사 루첼","src":"images/ruchel/fantasy/04-mage-library.webp","memo":"마법서재 한가운데서도 책보다 먼저 눈에 들어오는 마법사.","date":"2026.09.11"},{"cat":"fantasy","title":"네크로맨서 여왕 루첼","src":"images/ruchel/fantasy/05-necromancer-queen.webp","memo":"달빛 아래, 해골과 어둠까지 조용히 거느리는 여왕.","date":"2026.09.11"},{"cat":"anniversary","title":"1주년 메이드 카페","src":"images/ruchel/maid-cafe.webp","memo":"처음으로 직접 보러 갔던 날.","date":"2026.09"}];

const BASE_CATS=[
["member","✦","MEMBER","MEMBER"],
["species","🐾","RACES & FORMS","종족"],
["jobs","⚓","JOBS & ROLES","직업"],
["fantasy","🔮","FANTASY","판타지"],
["outfit","👗","OUTFITS","의상"],
["anniversary","🎂","ANNIVERSARY","기념일"],
["broadcast","🎮","STREAM & GAME","방송 & 게임"],
["special","✦","SPECIAL","스페셜"]
];

let currentMember=null;
let currentCats=[];
const albums=document.querySelector("#albums");

MEMBERS.forEach((m,i)=>{
  const d=document.createElement("article");
  d.className="album "+(m.open?"open":"");
  d.style.setProperty("--p",m.p); d.style.setProperty("--s",m.s);
  d.innerHTML=`<span class=num>0${i+1}</span><div class=mark>${m.mark}</div><h3>${m.name}</h3><em>${m.en}</em><div class=state>${m.open?"OPEN ARCHIVE":"ARCHIVE PREPARING..."}</div>`;
  if(m.open)d.onclick=()=>openMember(m,i);
  albums.append(d);
});
openCount.textContent=MEMBERS.filter(m=>m.open).length;

function openMember(m,index){
  currentMember=m;
  transitionMark.textContent=m.mark;
  transitionName.textContent=m.en;
  transitionBook.style.setProperty("--p",m.p);
  transitionBook.style.setProperty("--s",m.s);
  transition.style.display="grid";
  setTimeout(()=>{
    transition.style.display="none";
    archive.classList.remove("active");
    member.classList.add("active");
    applyMember(m,index);
    scrollTo(0,0);
  },1350);
}

function applyMember(m,index){
  document.documentElement.style.setProperty("--member-primary",m.p);
  document.documentElement.style.setProperty("--member-secondary",m.s);
  albumNumber.textContent=`MEMORY ALBUM · ${String(index+1).padStart(2,"0")}`;
  memberTitle.textContent=m.en;
  memberDate.textContent=m.date||"VABLUE MEMORY ARCHIVE";
  memberQuote.textContent=m.quote||"“기억하고 싶은 장면들을 한 권에.”";
  memberHeroImage.src=m.hero;
  memberHeroImage.alt=m.name;
  content.hidden=true;
  buildCategories(m);
}

function buildCategories(m){
  cats.innerHTML="";
  currentCats=BASE_CATS.map((c,i)=>[i===0?m.id:c[0],c[1],i===0?m.en:c[2],i===0?m.name:c[3]]);
  currentCats.forEach(c=>{
    const n=getItems(c[0]).length;
    const d=document.createElement("button");
    d.className="cat";
    d.innerHTML=`<i>${c[1]}</i><b>${c[3]}</b><small>${c[2]}</small><span>${n} ${n===1?"MEMORY":"MEMORIES"}</span>`;
    d.onclick=()=>render(c);
    cats.append(d);
  });
  render(currentCats[0]);
}

function getItems(cat){
  if(currentMember?.id==="ruchel"){
    const key=cat==="ruchel"?"ruchel":cat;
    return ITEMS.filter(x=>x.cat===key);
  }
  return [];
}

back.onclick=()=>{
  member.classList.remove("active");
  archive.classList.add("active");
  content.hidden=true;
  scrollTo(0,0);
};

enter.onclick=()=>{
  content.hidden=false;
  content.scrollIntoView({behavior:"smooth"});
};

function render(c){
  title.textContent=c[3];
  kick.textContent=c[2];
  const a=getItems(c[0]);
  count.textContent=`${a.length} ${a.length===1?"memory":"memories"}`;
  photos.innerHTML="";
  if(!a.length){
    photos.innerHTML='<div class="empty">아직 기록되지 않은 페이지.<br><small>이미지가 추가되면 이곳에 차곡차곡 쌓입니다.</small></div>';
    return;
  }
  a.forEach((x,i)=>{
    const d=document.createElement("article");
    d.className="memory m"+(i%5);
    d.innerHTML=`<img loading="lazy" src="${x.src}"><h4>${x.title}</h4><p>${x.memo}</p><time>${x.date}</time>`;
    d.onclick=()=>show(x);
    photos.append(d);
  });
  document.querySelector(".ghead").scrollIntoView({behavior:"smooth"});
}

function show(x){
  lbimg.src=x.src;
  lbdate.textContent=x.date;
  lbtitle.textContent=x.title;
  lbmemo.textContent=x.memo;
  lightbox.classList.add("show");
}

const closeLightbox=document.getElementById("close");
closeLightbox.addEventListener("click",(e)=>{e.stopPropagation();lightbox.classList.remove("show")});
lightbox.addEventListener("click",(e)=>{if(e.target===lightbox)lightbox.classList.remove("show")});
document.addEventListener("keydown",(e)=>{if(e.key==="Escape"&&lightbox.classList.contains("show"))lightbox.classList.remove("show")});
