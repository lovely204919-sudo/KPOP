/* Verified editorial snapshot: 2026-11-13 KST. Sources listed in MARKET_SOURCES. */
'use strict';
const MARKET_SOURCES = [
 {name:'K-pop Today / 공식·보도 구분 캘린더', url:'https://k-poptoday.com/en/'},
 {name:'Kpopgo / 발매 일정', url:'https://kpopgo.com/comebacks'},
 {name:'kpopping / 2026 데뷔 그룹 목록', url:'https://kpopping.com/categories/debut/2026'},
 {name:'Soompi / 2026 신인 그룹 보도', url:'https://www.soompi.com/article/1867396wpp/september-rookie-idol-group-brand-reputation-rankings-announced-4'},
 {name:'YG / BLACKPINK DEADLINE 공식',url:'https://ygfamily.com/ko/artists/blackpink/discography/1652'},
 {name:'Yonhap / TUIDE 데뷔',url:'https://en.yna.co.kr/view/AEN20260824010400315'},
 {name:'Kpop Profiles / 2026 데뷔 명단',url:'https://kprofiles.com/kpop-projects-and-groups-that-debuted-or-will-debut-in-2026/'}
];
const MARKET_RELEASES = [
 ['2026-01-16','ENHYPEN','THE SIN : VANISH','Mini album','2026-01-16','https://www.tenasia.com/music/2026011650354'],
 ['2026-02-06','ATEEZ','GOLDEN HOUR : Part.4','Mini album','2026-02-06','https://koreajoongangdaily.joins.com/news/2026-02-05/entertainment/kpop/Boy-band-Ateez-to-extend-golden-streak-with-13th-EP-Golden-Hour-Part-4/2517326'],
 ['2026-02-27','BLACKPINK','DEADLINE','Mini album','2026-02-27','https://ygfamily.com/ko/artists/blackpink/discography/1652'],
 ['2026-04-27','NEXZ','Mmchk','Release','2026-04-27','https://kpoplogs.com/comebacks/2026'],
 ['2026-08-24','NCT 127','BLINGY','Studio album','2026-08-24','https://music.apple.com/us/album/blingy-the-7th-album/6798956146'],
 ['2026-08-24','TUIDE','TUNE & PLAY / SUN KISS','Debut EP','2026-08-24','https://en.yna.co.kr/view/AEN20260824010400315'],
 ['2026-09-30','CLOSE YOUR EYES','256th Note','Mini album','2026-09-30','https://www.koreatimes.co.kr/entertainment/k-pop/20260930/close-your-eyes-channels-jazz-fueled-swagger-on-256th-note'],
 ['2026-09-11','LE SSERAFIM','Made My Night','Single','2026-09-11','https://kpopdex.com/schedules'],
 ['2026-10-12','NCT WISH','I SPY','Release','2026-10-12','https://kpopdex.com/schedules'],
 ['2026-10-19','NMIXX','Strange Muse','Release','2026-10-19','https://kpopdex.com/schedules'],
 ['2026-10-20','ONEW','Illusion','Single','2026-10-20','https://kpopgo.com/comebacks'],
 ['2026-10-23','LISA','PRESS PLAY','Mini album','2026-10-23','https://kpopgo.com/comebacks'],
 ['2026-10-23','BABYMONSTER','DESERVE','Single','2026-10-23','https://kpopgo.com/comebacks'],
 ['2026-10-26','IVE','Looks Can Kill','Mini album','2026-10-26','https://kpopgo.com/comebacks'],
 ['2026-10-26','RIIZE','Insomnia','Single','2026-10-26','https://kpopgo.com/comebacks'],
 ['2026-10-26','ILLIT','BREAK EVEN','Mini album','2026-10-26','https://kpopgo.com/comebacks'],
 ['2026-11-02','TREASURE','SHOCK','Single','2026-11-02','https://k-poptoday.com/en/'],
 ['2026-11-02','TWS','TO US','Single','2026-11-02','https://kpopgo.com/comebacks'],
 ['2026-11-02','xikers','ROUTE ZERO : The CALLING','Mini album','2026-11-02','https://kpopgo.com/comebacks'],
 ['2026-11-03','RESCENE','PULSE','Mini album','2026-11-03','https://kpopgo.com/comebacks'],
 ['2026-11-06','P1Harmony','BLOW UP','Mini album','2026-11-06','https://kpopgo.com/comebacks'],
 ['2026-11-06','XG','DEPENDS','Single','2026-11-06','https://kpopgo.com/comebacks'],
 ['2026-11-09','CHAERYEONG','Lovesick','Solo mini album','2026-11-09','https://k-poptoday.com/en/'],
 ['2026-11-09','NCT DREAM','DREAM AFTER DREAM','Studio album','2026-11-09','https://k-poptoday.com/en/'],
 ['2026-11-09','KEYVITUP','NA-GARI','Mini album','2026-11-09','https://kpopgo.com/comebacks'],
 ['2026-11-10','LNGSHOT','S.W.I.S.H.','Mini album','2026-11-10','https://k-poptoday.com/en/'],
 ['2026-11-11','KYUHYUN','CONTINUE','Mini album','2026-11-11','https://k-poptoday.com/en/'],
 ['2026-11-12','LUCY','Again!','Single','2026-11-12','https://kpopgo.com/comebacks'],
 ['2026-11-13','ATEEZ','GOLDEN HOUR : Part.6','Mini album','2026-11-13','https://k-poptoday.com/en/'],
 ['2026-11-13','Girlset','young and dumb','Single','2026-11-13','https://kpopgo.com/comebacks'],
 ['2026-11-16','TOMORROW X TOGETHER','PERFECT STORM','Mini album','2026-11-16','https://k-poptoday.com/en/'],
 ['2026-11-17','AMPERS&ONE','PATHFINDER','Studio album','2026-11-17','https://kpopgo.com/comebacks'],
 ['2026-11-20','ENHYPEN','THE SIN : PARALLEL WORLD','Single album','2026-11-20','https://k-poptoday.com/en/'],
 ['2026-11-20','NAYEON','NA-sty','Single','2026-11-20','https://kpopgo.com/comebacks'],
 ['2026-11-25','Stray Kids','SUIATSU','Mini album','2026-11-25','https://kpopgo.com/comebacks'],
 ['2026-12-09','NMIXX','N=MIXX','Studio album','2026-12-09','https://k-poptoday.com/en/']
].map(([date,artist,title,type,checked,url])=>({date,artist,title,type,url}));
const MARKET_DEBUTS = [
 ['2026-01-05','yesw8are','MODHAUS (idntt unit)','boy'],
 ['2026-01-08','LATENCY','ODDINARY RECORDS','girl'],
 ['2026-01-12','ALPHA DRIVE ONE','WAKEONE','boy'],
 ['2026-01-13','LNGSHOT','MORE VISION','boy'],
 ['2026-01-21','dodree','INNIT Entertainment (JYP 산하)','girl'],
 ['2026-02-03','NAVILLERA','Troy Entertainment','girl'],
 ['2026-02-23','NCT JNJM','SM Entertainment','boy'],
 ['2026-02-23','DAILY:DIRECTION','ODDWAVE','boy'],
 ['2026-03-03','TUNEXX','IST Entertainment','boy'],
 
 ['2026-04-08','KEYVITUP','iNKODE','boy'],
 ['2026-04-21','UNCHILD','소속사 재검증 필요','boy'],
 ['2026-05-26','AND2BLE','YH Entertainment','boy'],
 ['2026-08-19','OURBIRTHDAY','소속사 재검증 필요','girl'],
 ['2026-08-24','TUIDE','ABD (HYBE)','girl']
].map(([date,name,agency,gender])=>({date,name,agency,gender,source:'https://kpopping.com/categories/debut/2026'}));
const MARKET_TRENDS = [
 {tag:'Soultronic / Neo R&B', title:'따뜻한 소울과 전자음악의 결합', detail:'TUIDE가 데뷔 앨범에서 공식 설명한 Soultronic 콘셉트. 따뜻한 중저역 보컬, 댐핑감 있는 소울 코드와 전자 리듬 혼합', bpm:'92–118 BPM (제안)', usage:'Rhodes · layered vocal harmony · soft syncopation'},
 {tag:'Y2K / 2000s', title:'명료한 훅 + 레트로 리듬', detail:'정확한 복고 재현보다 뉴잭스윙·R&B·팝 랩을 현대적인 저역과 섞어 보는 프로덕션 가설', bpm:'92–120 BPM', usage:'싱잉랩 8마디 · 드라이 클랩 · EP · 콜앤리스폰스'},
 {tag:'Hybrid Groove', title:'UKG · 2-step · 유기적 베이스', detail:'댄스 그룹의 퍼포먼스와 듣기 편한 팝 훅을 동시에 확보하는 접근. 특정 차트 1위라는 뜻은 아님', bpm:'112–138 BPM', usage:'2-step 킥/스네어 · 짧은 보컬 샷 · 절제된 프리'},
 {tag:'Live / Band', title:'밴드 팝과 드럼의 하이브리드', detail:'기타 리프와 생동감 있는 드럼을 DnB·팝 록·댄스 팝의 빠른 에너지와 조합', bpm:'136–174 BPM', usage:'오픈코드 기타 · 킥의 질주감 · 앤섬 후렴'},
 {tag:'Performance / Experimental', title:'섹션 대비형 Mix-pop', detail:'랩 중심 벌스와 선명한 보컬 후렴을 대비하고, 사운드보다 한 문장 훅을 앞세움', bpm:'96–142 BPM', usage:'4/8마디 정합 · 간결한 챈트 · 스위치업'},
 {tag:'R&B / Intimate', title:'미니멀한 감정선', detail:'중저역 탑라인과 정돈된 저역, 촘촘한 보컬 하모니 중심의 데모 전략', bpm:'76–110 BPM', usage:'Rhodes · 짧은 룸리버브 · 808 서브'}
];
function marketClean(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function marketInit(){
  if(typeof DB==='undefined') return;
  const byName=n=>DB.groups.find(g=>(g.name||'').toLowerCase().replace(/[^a-z\d]/g,'')===n.toLowerCase().replace(/[^a-z\d]/g,''));
  MARKET_DEBUTS.forEach(d=>{
    const original=byName(d.name);
    if(original){original.debut=original.debut||d.date; if(/pre-debut|unknown|low data|unclear/i.test(original.status||'')) original.status='Active / 2026 debut'; if(!original.agency || /tba|unknown|unclear/i.test(original.agency)) original.agency=d.agency; return;}
    // Conservative minimum dataset for newly confirmed acts: unknown song metadata is never invented.
    DB.groups.push({alias:d.name,name:d.name,gender:d.gender,type:d.gender==='girl'?'Girl group':'Boy group',agency:d.agency,generation:'5th',debut:d.date,status:'New / 2026 debut',archetype:'2026 rookie / 사운드 확인 필요',mood:'검증 필요',genres:'발매 음원 기반 확인 필요',concept:'2026 신규 데뷔 팀',signature:'2026 데뷔가 확인된 아티스트. 개별 곡 사운드 프로파일은 검증 후 업데이트.',note:'출처: kpopping 2026 debuts',song1:'',song2:'',song3:''});
  });
  MARKET_RELEASES.filter(x=>x.date<'2026-11-13').forEach(r=>{const g=byName(r.artist);if(g){g.latestRelease={date:r.date,title:r.title,source:r.url}; if(/pre-debut|unknown|low data|unclear/i.test(g.status||''))g.status='Active';}});
  let tuide=byName('TUIDE');if(tuide){tuide.agency='ABD (HYBE)';tuide.archetype='Soultronic / Soul + Electronic';tuide.mood='Bright / Relaxed / Soulful';tuide.genres='soultronic / neo soul / dance pop';tuide.song1='SUN KISS';tuide.note='2026.08.24 데뷔 / TUNE & PLAY · Yonhap 보도 근거';}
  let stats=document.getElementById('h-total'); if(stats)stats.title='2026-11-13 기준 보유 DB, 공식 아티스트 전체 명단이 아님';
  const el=document.getElementById('market-release-list');if(!el)return;
  const total=document.getElementById('market-release-total');if(total)total.textContent=MARKET_RELEASES.length;
  const render=()=>{
    let filter=document.getElementById('market-filter')?.value||'all';let q=(document.getElementById('market-search')?.value||'').toLowerCase();
    const rows=MARKET_RELEASES.filter(x=>(filter==='all'||(filter==='released'?x.date<='2026-11-13':x.date>'2026-11-13'))&&[x.artist,x.title,x.type].join(' ').toLowerCase().includes(q));
    el.innerHTML=rows.map(r=>'<div class="market-release"><div class="mr-date">'+marketClean(r.date.slice(5))+'</div><div class="mr-main"><b>'+marketClean(r.artist)+'</b><span>'+marketClean(r.title)+'</span><small>'+marketClean(r.type)+'</small></div><span class="mr-state '+(r.date<='2026-11-13'?'out':'soon')+'">'+(r.date<'2026-11-13'?'발매':r.date==='2026-11-13'?'오늘':'예정')+'</span><a href="'+marketClean(r.url)+'" target="_blank" rel="noopener">근거 ↗</a></div>').join('') || '<p class="lh-muted">해당되는 발매 일정이 없어요.</p>';
    document.getElementById('market-release-count').textContent=rows.length+' releases';
  };
  document.getElementById('market-filter').addEventListener('change',render);document.getElementById('market-search').addEventListener('input',render);render();
  document.getElementById('market-debuts').innerHTML=MARKET_DEBUTS.map(d=>'<div class="market-rookie"><small>'+marketClean(d.date)+'</small><b>'+marketClean(d.name)+'</b><span>'+marketClean(d.agency)+'</span></div>').join('');
  document.getElementById('market-trend-cards').innerHTML=MARKET_TRENDS.map(t=>'<div class="market-trend"><span class="mk-tag">'+marketClean(t.tag)+'</span><h3>'+marketClean(t.title)+'</h3><p>'+marketClean(t.detail)+'</p><div class="mk-foot">'+marketClean(t.bpm)+'<br>'+marketClean(t.usage)+'</div></div>').join('');
  document.getElementById('market-sources').innerHTML=MARKET_SOURCES.map(s=>'<a href="'+marketClean(s.url)+'" target="_blank" rel="noopener">'+marketClean(s.name)+' ↗</a>').join('');
}
marketInit();
