/* 페이지네이션 누를떄 portfoli 위치로 이동 */
/* let portfolioHeight = document.querySelector("#page3 .title").offsetHeight;
document.querySelectorAll(".page-nation > div").forEach(function (el) {

  el.addEventListener("click", function () {
    window.scrollTo(0, portfolioHeight + portfolioHeight);
    
  });
}); */
/* 포트폴리오 필터링 */
////////////////////////////////////////////////////////////////변수
//필터링 변수
const portBtns = document.querySelectorAll(".p3-navi li");
const items = document.querySelectorAll(".portfolio .all");
const sites = document.querySelectorAll("[data-item='site']");
const pages = document.querySelectorAll("[data-item='page']");
const designs = document.querySelectorAll("[data-item='design']");
//페이지네이션 변수
const eachPageShow = 8; //페이지당 보여줄 아이템 수
const pageNationShow = 3; // 한번에 보여줄 페이지네이션 개수
let currentPageNationGroup = 0;
let currentPageNationGroupAll = 0;
let currentPageNationGroupSite = 0;
let currentPageNationGroupDesign = 0;
 let itemsCount = items.length; // 총 아이템 개수
let PnCount = Math.ceil(itemsCount/eachPageShow); // 첫 화면 페이지네이션 개수
let pageNationGroup = document.querySelector(".page-nation .page-nation-group"); //HTML의 page-nation-group (page-nation-number 부모)
//////////////////////////////////////////////////////////////////The end 변수

//////////////////////////////////////////////////////////포트폴리오 필터링
portBtns.forEach((portBtn, index, arr) => {
  portBtn.addEventListener("click", (e) => {
    let navData = e.target.dataset.nav;

    //버튼 클릭시 on클래스 추가,제거
      for (i = 0; i < arr.length; i++){
        arr[i].classList.remove("on");
        if (index === i) {
        arr[i].classList.add("on");
        }
      }
    
    //각각의 item들
      items.forEach((item) => {
        item.classList.add("hide");//item들에 hide클래스 모두 부여
        let itemData = item.dataset.item;
        if (itemData === navData) {       
        item.classList.remove("hide");//data-item의 값과 data-nav의 값이 일치할 때만 hide클래스 제거
        }
        if (navData === "all") {
          item.classList.remove("hide");//data-item 이 all 이면 hide클래스 제거
        }    
      });//end item들
   
  }); 
});///////////////////////////////////////////////////// The end 포트폴리오 필터링


/* site,page,design 페이지네이션 개수 구하기 */
/////////////////////////////////////////////////// site,page,design 페이지네이션 개수 구하기
let itemsArray = [...items];
let countSite = 0;
let countPage = 0;
let countDesign = 0;

for (i = 0; i < itemsArray.length; i++){
  if (itemsArray[i].dataset.item === "site") {
    countSite++;
  }
  if (itemsArray[i].dataset.item === "page") {
    countPage++;
  }
  if (itemsArray[i].dataset.item === "design") {
    countDesign++;
  }
}
let allPnCount = Math.ceil(itemsCount / eachPageShow);
let sitePnCount = Math.ceil(countSite / eachPageShow);
let pagePnCount = Math.ceil(countPage / eachPageShow);
let designPnCount = Math.ceil(countDesign / eachPageShow);
/////////////////////////////////////////////////// site,page,design 페이지네이션 개수 구하기


/* All, Site, Page, Design 각각 첫 페이지 10개씩 보이게 하기 */
for (portBtn of portBtns) {
  portBtn.addEventListener("click", (e) => {
  let navData = e.target.dataset.nav;
  //all
  if (navData === "all") {
    let siteItems = document.querySelectorAll(".portfolio div.all");
    itemsArray = Array.from(siteItems);
    
     for (ia of itemsArray) {
                  ia.classList.add("hide");//모두 숨긴 다음
                }
                let showPortfolios = itemsArray.slice(0, eachPageShow);
                for (sp of showPortfolios) { //1번부터 10번까지 보이게하기
                  sp.classList.remove("hide");
                }
   }  
  //site
  if (navData === "site") {
    let siteItems = document.querySelectorAll(".portfolio div.site");
    itemsArray = Array.from(siteItems);
     for (ia of itemsArray) {
                  ia.classList.add("hide");//모두 숨긴 다음
                }
                let showPortfolios = itemsArray.slice(0, eachPageShow);
                for (sp of showPortfolios) { //1번부터 10번까지 보이게하기
                  sp.classList.remove("hide");
                }
   }  
  //page
  if (navData === "page") { 
    let siteItems = document.querySelectorAll(".portfolio div.page");
    itemsArray = Array.from(siteItems);
     for (ia of itemsArray) {
                  ia.classList.add("hide");//모두 숨긴 다음
                }
                let showPortfolios = itemsArray.slice(0, eachPageShow);
                for (sp of showPortfolios) { //1번부터 10번까지 보이게하기
                  sp.classList.remove("hide");
                }
  }    
  //design
  if (navData === "design") {
    let siteItems = document.querySelectorAll(".portfolio div.design");
    itemsArray = Array.from(siteItems);
     for (ia of itemsArray) {
                  ia.classList.add("hide");//모두 숨긴 다음
                }
                let showPortfolios = itemsArray.slice(0, eachPageShow);
                for (sp of showPortfolios) { //1번부터 10번까지 보이게하기
                  sp.classList.remove("hide");
                }
  }    

 });
}




//////////////////////////////////////////////////////////////



/* 렌딩페이지 */
///////////////////////////////////////////////////// 렌딩페이지 페이지네이션
firstPagePageNation(); //렌딩페이지 함수 실행
displayPortfolio(0); //랜딩페이지 1페이지부터 시작하기
//렌딩페이지 함수
function firstPagePageNation() {
  //페이지 네이션 생성
  for (let i = 1; i <= PnCount; i++){
    let createPageNation = document.createElement("div");
    createPageNation.innerHTML = i;
    pageNationGroup.append(createPageNation);
    createPageNation.classList.add("page-nation-number", "first" + i);
  }
  let pageNations = document.querySelectorAll(".page-nation .page-nation-group .page-nation-number");//생성된 페이지 네이션 넘버
  document.querySelector(".page-nation .page-nation-group .first1").classList.add("on");//기본으로 1번버튼에 클래스 on 추가

  /* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////
  //prev next 생성
  let prevGroup = document.querySelector(".page-nation .prev-group");
  let nextGroup = document.querySelector(".page-nation .next-group");
  let createDivPrev = document.createElement("div");
  let createDivNext = document.createElement("div");
  createDivPrev.innerHTML = "이전";
  createDivNext.innerHTML = "다음";
  createDivPrev.classList.add("prev");
  createDivNext.classList.add("next");
  prevGroup.append(createDivPrev);
  nextGroup.append(createDivNext);
  //페이지 네이션 그룹 표시 함수
  function displayPageNationGroup(num) {
    //페이지 네이션 숨기기
    for (nb of pageNations) {
      nb.classList.add("hide");
    }
    let totalPagenationGroupCount = Math.ceil(PnCount / pageNationShow); 
    let pageNationsArr = [...pageNations];
    let start = num * pageNationShow;
    let end = start + pageNationShow;
    let PageNationListArr = pageNationsArr.slice(start, end);
    for (item of PageNationListArr) {
      item.classList.remove("hide");
    }
    //pagenation group prev 버튼 hide show
    let prev = document.querySelector(".page-nation .prev");
    if (currentPageNationGroup === 0) {
      
      prev.classList.add("hide");
    } else {
      prev.classList.remove("hide");
    }
     //pagenation group next 버튼 hide show
    let next = document.querySelector(".page-nation .next");
    if (currentPageNationGroup === totalPagenationGroupCount - 1) {
      
      next.classList.add("hide");
    } else {
      next.classList.remove("hide");
    }
  }
  displayPageNationGroup(0);//함수 실행
  //넥스트 버튼 클릭할 때
  let next = document.querySelector(".page-nation .next");
  next.addEventListener("click", function () {
    //페이지네이션 3묶음당 1개씩 보여주기
    let nextPagenationNum = currentPageNationGroup*pageNationShow+pageNationShow; 
    displayPortfolio(nextPagenationNum);
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[nextPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 증가시키기
    ++currentPageNationGroup;
    //증가되는 번호 페이지네이션 그룹함수에 넘겨주기
    displayPageNationGroup(currentPageNationGroup);
   
  });
    
  //프레브 버튼 클릭할 때
let prev = document.querySelector(".page-nation .prev");
  prev.addEventListener("click", function () {
     //페이지네이션 3묶음당 1개씩 보여주기
    let prevPagenationNum = currentPageNationGroup*pageNationShow-pageNationShow; 
    displayPortfolio(prevPagenationNum);
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[prevPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 감소
    --currentPageNationGroup;
    //감소되는 번호 페이지네이션 그룹함수에 할당하기
    displayPageNationGroup(currentPageNationGroup);
    
  });
/* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////
  


  //페이지 네이션 넘버 클릭 이벤트
  pageNations.forEach((pageNation, idx, array) => {
    pageNation.addEventListener("click", (e) => {
      //on 클래스 제거
      for (i = 0; i < array.length; i++){
          array[i].classList.remove("on");
      }
      //클릭한 것만 on 클래스 추가
      e.target.classList.add("on");
      //해당 버튼을 누를때 마다 8개씩 보여주기
      displayPortfolio(idx);
        
      });
  });

 
}
function displayPortfolio(idx) {
  let itemsArray = Array.from(items);//items를 배열로 만듦 방법2. [...items]이것도 가능
  let start = idx * eachPageShow;
  let last = start + eachPageShow;
  for (ia of itemsArray) {
    ia.classList.add("hide");
  }
  let showPortfolios = itemsArray.slice(start, last);
  for (sp of showPortfolios) {
    sp.classList.remove("hide");
  }
}


/////////////////////////////////////////////////////The end 렌딩페이지 페이지네이션


/* ALL */
///////////////////////////////////////////////////all 버튼 누를 때
document.querySelector(".p3-navi li.all a").addEventListener("click", function () {
  //기존 페이지네이션 제거
  let pageNationsD = document.querySelectorAll(".page-nation-group .page-nation-number");
  for (pnitem of pageNationsD) {
    pnitem.remove();
  }
  //페이지 네이션 생성
  for (let i = 1; i <= PnCount; i++){
    let createPageNation = document.createElement("div");
    createPageNation.innerHTML = i;
    pageNationGroup.append(createPageNation);
    createPageNation.classList.add("page-nation-number", "all" + i);
  }
  let pageNations = document.querySelectorAll(".page-nation .page-nation-group .page-nation-number");//생성된 페이지 네이션 넘버
  document.querySelector(".page-nation .page-nation-group .all1").classList.add("on");//기본으로 1번버튼에 클래스 on 추가


  /* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////
    //currentPageNationGroupAll 초기화
  currentPageNationGroupAll = 0;
  //기존 prev next 제거
  document.querySelector(".prev-group .prev").remove();
  document.querySelector(".next-group .next").remove();
  //prev next 생성
  let prevGroup = document.querySelector(".page-nation .prev-group");
  let nextGroup = document.querySelector(".page-nation .next-group");
  let createDivPrev = document.createElement("div");
  let createDivNext = document.createElement("div");
  createDivPrev.innerHTML = "이전";
  createDivNext.innerHTML = "다음";
  createDivPrev.classList.add("prev");
  createDivNext.classList.add("next");
  prevGroup.append(createDivPrev);
  nextGroup.append(createDivNext);
  //페이지 네이션 그룹 표시 함수
  function displayPageNationGroup(num) {
    //페이지 네이션 숨기기
    for (nb of pageNations) {
      nb.classList.add("hide");
    }
    let totalPagenationGroupCount = Math.ceil(allPnCount / pageNationShow); //allPnCount수정
    let pageNationsArr = [...pageNations];
    let start = num * pageNationShow;
    let end = start + pageNationShow;
    let PageNationListArr = pageNationsArr.slice(start, end);
    for (item of PageNationListArr) {
      item.classList.remove("hide");
    }
    //pagenation group prev 버튼 hide show
    let prev = document.querySelector(".page-nation .prev");
    if (currentPageNationGroupAll === 0) { //currentPageNationGroupAll 수정
      
      prev.classList.add("hide");
    } else {
      prev.classList.remove("hide");
    }
     //pagenation group next 버튼 hide show
    let next = document.querySelector(".page-nation .next");
    if (currentPageNationGroupAll === totalPagenationGroupCount - 1) { //currentPageNationGroupAll 수정
      
      next.classList.add("hide");
    } else {
      next.classList.remove("hide");
    }
  }
  displayPageNationGroup(0);//함수 실행
  //넥스트 버튼 클릭할 때
  let next = document.querySelector(".page-nation .next");
  next.addEventListener("click", function () {
    //페이지네이션 3묶음당 1개씩 보여주기
    let nextPagenationNum = currentPageNationGroupAll*pageNationShow+pageNationShow; //currentPageNationGroupAll 수정 displayPortfolio 수정
    displayPortfolio(nextPagenationNum);
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[nextPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 증가시키기
    ++currentPageNationGroupAll;
    //증가되는 번호 페이지네이션 그룹함수에 넘겨주기
    displayPageNationGroup(currentPageNationGroupAll);
   
  });
    
  //프레브 버튼 클릭할 때
let prev = document.querySelector(".page-nation .prev");
  prev.addEventListener("click", function () {
     //페이지네이션 3묶음당 1개씩 보여주기
    let prevPagenationNum = currentPageNationGroupAll*pageNationShow-pageNationShow; //currentPageNationGroupAll 수정 displayPortfolio 수정
    displayPortfolio(prevPagenationNum);
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[prevPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 감소
    --currentPageNationGroupAll;
    //감소되는 번호 페이지네이션 그룹함수에 할당하기
    displayPageNationGroup(currentPageNationGroupAll);
    
  });
/* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////
  

//페이지 네이션 넘버 클릭 이벤트
  pageNations.forEach((pageNation, idx, array) => {
    pageNation.addEventListener("click", (e) => {
      //on 클래스 제거
      for (i = 0; i < array.length; i++){
          array[i].classList.remove("on");
      }
      //클릭한 것만 on 클래스 추가
      e.target.classList.add("on");
      //해당 버튼을 누를때 마다 10개씩 보여주기
      displayPortfolioall(idx);
        
      });
  });
 
});
function displayPortfolioall(idx) {
  let siteItems = document.querySelectorAll(".portfolio div.all");
  let itemsArray = Array.from(siteItems);//items를 배열로 만듦 방법2. [...items]이것도 가능
  let start = idx * eachPageShow;
  let last = start + eachPageShow;
  for (ia of itemsArray) {
    ia.classList.add("hide");
  }
  let showPortfoliosall = itemsArray.slice(start, last);
  for (spall of showPortfoliosall) {
    spall.classList.remove("hide");
  }
};
///////////////////////////////////////////////////The end all버튼 누를 때

/* site */
////////////////////////////////////////////////// Site 버튼 누를 때
document.querySelector(".p3-navi li.site a").addEventListener("click", function () {

  //기존 페이지네이션 제거
  let pageNationsD = document.querySelectorAll(".page-nation-group .page-nation-number");
  for (pnitem of pageNationsD) {
    pnitem.remove();
  }
  //페이지 네이션 생성
  for (let i = 1; i <= sitePnCount; i++){
    let createPageNation = document.createElement("div");
    createPageNation.innerHTML = i;
    pageNationGroup.append(createPageNation);
    createPageNation.classList.add("page-nation-number", "site" + i);
  }
  let pageNations = document.querySelectorAll(".page-nation .page-nation-group .page-nation-number");//생성된 페이지 네이션 넘버
  document.querySelector(".page-nation .page-nation-group .site1").classList.add("on");//기본으로 1번버튼에 클래스 on 추가


  /* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////
    //currentPageNationGroupSite 초기화
  currentPageNationGroupSite = 0; //currentPageNationGroupSite 수정
  //기존 prev next 제거
  document.querySelector(".prev-group .prev").remove();
  document.querySelector(".next-group .next").remove();
  //prev next 생성
  let prevGroup = document.querySelector(".page-nation .prev-group");
  let nextGroup = document.querySelector(".page-nation .next-group");
  let createDivPrev = document.createElement("div");
  let createDivNext = document.createElement("div");
  createDivPrev.innerHTML = "이전";
  createDivNext.innerHTML = "다음";
  createDivPrev.classList.add("prev");
  createDivNext.classList.add("next");
  prevGroup.append(createDivPrev);
  nextGroup.append(createDivNext);
  //페이지 네이션 그룹 표시 함수
  function displayPageNationGroup(num) {
    //페이지 네이션 숨기기
    for (nb of pageNations) {
      nb.classList.add("hide");
    }
    let totalPagenationGroupCount = Math.ceil(sitePnCount / pageNationShow); //sitePnCount수정
    let pageNationsArr = [...pageNations];
    let start = num * pageNationShow;
    let end = start + pageNationShow;
    let PageNationListArr = pageNationsArr.slice(start, end);
    for (item of PageNationListArr) {
      item.classList.remove("hide");
    }
    //pagenation group prev 버튼 hide show
    let prev = document.querySelector(".page-nation .prev");
    if (currentPageNationGroupSite === 0) { //currentPageNationGroupSite 수정
      
      prev.classList.add("hide");
    } else {
      prev.classList.remove("hide");
    }
     //pagenation group next 버튼 hide show
    let next = document.querySelector(".page-nation .next");
    if (currentPageNationGroupSite === totalPagenationGroupCount - 1) { //currentPageNationGroupSite 수정
      
      next.classList.add("hide");
    } else {
      next.classList.remove("hide");
    }
  }
  displayPageNationGroup(0);//함수 실행
  //넥스트 버튼 클릭할 때
  let next = document.querySelector(".page-nation .next");
  next.addEventListener("click", function () {
    //페이지네이션 3묶음당 1개씩 보여주기
    let nextPagenationNum = currentPageNationGroupSite*pageNationShow+pageNationShow; //currentPageNationGroupSite 수정 displayPortfolio 수정
    displayPortfolioSite(nextPagenationNum);
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[nextPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 증가시키기
    ++currentPageNationGroupSite;
    //증가되는 번호 페이지네이션 그룹함수에 넘겨주기
    displayPageNationGroup(currentPageNationGroupSite);
   
  });
    
  //프레브 버튼 클릭할 때
let prev = document.querySelector(".page-nation .prev");
  prev.addEventListener("click", function () {
     //페이지네이션 3묶음당 1개씩 보여주기
    let prevPagenationNum = currentPageNationGroupSite*pageNationShow-pageNationShow; //currentPageNationGroupSite 수정 displayPortfolio 수정
    displayPortfolioSite(prevPagenationNum);
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[prevPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 감소
    --currentPageNationGroupSite;
    //감소되는 번호 페이지네이션 그룹함수에 할당하기
    displayPageNationGroup(currentPageNationGroupSite);
    
  });
/* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////


//페이지 네이션 넘버 클릭 이벤트
  pageNations.forEach((pageNation, idx, array) => {
    pageNation.addEventListener("click", (e) => {
      //on 클래스 제거
      for (i = 0; i < array.length; i++){
          array[i].classList.remove("on");
      }
      //클릭한 것만 on 클래스 추가
      e.target.classList.add("on");
      //해당 버튼을 누를때 마다 10개씩 보여주기
      displayPortfolioSite(idx);
        
      });
  });
 
});
function displayPortfolioSite(idx) {
  let siteItems = document.querySelectorAll(".portfolio div.site");
  let itemsArray = Array.from(siteItems);//items를 배열로 만듦 방법2. [...items]이것도 가능
  let start = idx * eachPageShow;
  let last = start + eachPageShow;
  for (ia of itemsArray) {
    ia.classList.add("hide");
  }
  let showPortfoliosall = itemsArray.slice(start, last);
  for (spall of showPortfoliosall) {
    spall.classList.remove("hide");
  }
};
//////////////////////////////////////////////////The end Site 버튼 누를 때


/* page */
////////////////////////////////////////////////// page 버튼 누를 때
document.querySelector(".p3-navi li.pageB a").addEventListener("click", function () {

  //기존 페이지네이션 제거
  let pageNationsD = document.querySelectorAll(".page-nation-group .page-nation-number");
  for (pnitem of pageNationsD) {
    pnitem.remove();
  }
  //페이지 네이션 생성
  for (let i = 1; i <= pagePnCount; i++){
    let createPageNation = document.createElement("div");
    createPageNation.innerHTML = i;
    pageNationGroup.append(createPageNation);
    createPageNation.classList.add("page-nation-number", "page" + i);
  }
  let pageNations = document.querySelectorAll(".page-nation .page-nation-group .page-nation-number");//생성된 페이지 네이션 넘버
  document.querySelector(".page-nation .page-nation-group .page1").classList.add("on");//기본으로 1번버튼에 클래스 on 추가


  /* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////
    //currentPageNationGroupPage 초기화
  currentPageNationGroupPage = 0; //currentPageNationGroupPage 수정
  //기존 prev next 제거
  document.querySelector(".prev-group .prev").remove();
  document.querySelector(".next-group .next").remove();
  //prev next 생성
  let prevGroup = document.querySelector(".page-nation .prev-group");
  let nextGroup = document.querySelector(".page-nation .next-group");
  let createDivPrev = document.createElement("div");
  let createDivNext = document.createElement("div");
  createDivPrev.innerHTML = "이전";
  createDivNext.innerHTML = "다음";
  createDivPrev.classList.add("prev");
  createDivNext.classList.add("next");
  prevGroup.append(createDivPrev);
  nextGroup.append(createDivNext);
  //페이지 네이션 그룹 표시 함수
  function displayPageNationGroup(num) {
    //페이지 네이션 숨기기
    for (nb of pageNations) {
      nb.classList.add("hide");
    }
    let totalPagenationGroupCount = Math.ceil(pagePnCount / pageNationShow); //pagePnCount수정
    let pageNationsArr = [...pageNations];
    let start = num * pageNationShow;
    let end = start + pageNationShow;
    let PageNationListArr = pageNationsArr.slice(start, end);
    for (item of PageNationListArr) {
      item.classList.remove("hide");
    }
    //pagenation group prev 버튼 hide show
    let prev = document.querySelector(".page-nation .prev");
    if (currentPageNationGroupPage === 0) { //currentPageNationGroupPage 수정
      
      prev.classList.add("hide");
    } else {
      prev.classList.remove("hide");
    }
     //pagenation group next 버튼 hide show
    let next = document.querySelector(".page-nation .next");
    if (currentPageNationGroupPage === totalPagenationGroupCount - 1) { //currentPageNationGroupPage 수정
      
      next.classList.add("hide");
    } else {
      next.classList.remove("hide");
    }
  }
  displayPageNationGroup(0);//함수 실행
  //넥스트 버튼 클릭할 때
  let next = document.querySelector(".page-nation .next");
  next.addEventListener("click", function () {
    //페이지네이션 3묶음당 1개씩 보여주기
    let nextPagenationNum = currentPageNationGroupPage*pageNationShow+pageNationShow; //currentPageNationGroupPage 수정 displayPortfolioPage 수정
    displayPortfolioPage(nextPagenationNum);
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[nextPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 증가시키기
    ++currentPageNationGroupPage;
    //증가되는 번호 페이지네이션 그룹함수에 넘겨주기
    displayPageNationGroup(currentPageNationGroupPage);
   
  });
    
  //프레브 버튼 클릭할 때
let prev = document.querySelector(".page-nation .prev");
  prev.addEventListener("click", function () {
     //페이지네이션 3묶음당 1개씩 보여주기
    let prevPagenationNum = currentPageNationGroupPage*pageNationShow-pageNationShow; //currentPageNationGroupPage 수정 displayPortfolioPage 수정
    displayPortfolioPage(prevPagenationNum);
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[prevPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 감소
    --currentPageNationGroupPage;
    //감소되는 번호 페이지네이션 그룹함수에 할당하기
    displayPageNationGroup(currentPageNationGroupPage);
    
  });
/* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////



//페이지 네이션 넘버 클릭 이벤트
  pageNations.forEach((pageNation, idx, array) => {
    pageNation.addEventListener("click", (e) => {
      //on 클래스 제거
      for (i = 0; i < array.length; i++){
          array[i].classList.remove("on");
      }
      //클릭한 것만 on 클래스 추가
      e.target.classList.add("on");
      //해당 버튼을 누를때 마다 10개씩 보여주기
      displayPortfolioPage(idx);
        
      });
  });
 
});
function displayPortfolioPage(idx) {
  let pageItems = document.querySelectorAll(".portfolio div.page");
  let itemsArray = Array.from(pageItems);//items를 배열로 만듦 방법2. [...items]이것도 가능
  let start = idx * eachPageShow;
  let last = start + eachPageShow;
  for (ia of itemsArray) {
    ia.classList.add("hide");
  }
  let showPortfoliosall = itemsArray.slice(start, last);
  for (spall of showPortfoliosall) {
    spall.classList.remove("hide");
  }
};
//////////////////////////////////////////////////The end page 버튼 누를 때



/* design */
////////////////////////////////////////////////// design 버튼 누를 때
document.querySelector(".p3-navi li.designB a").addEventListener("click", function () {
  //기존 페이지네이션 제거
  let pageNationsD = document.querySelectorAll(".page-nation-group .page-nation-number");
  for (pnitem of pageNationsD) {
    pnitem.remove();
  }
  
  //페이지 네이션 생성
  for (let i = 1; i <= designPnCount; i++){
    let createPageNation = document.createElement("div");
    createPageNation.innerHTML = i;
    pageNationGroup.append(createPageNation);
    createPageNation.classList.add("page-nation-number", "design" + i);
  }
  let pageNations = document.querySelectorAll(".page-nation .page-nation-group .page-nation-number");//생성된 페이지 네이션 넘버
  document.querySelector(".page-nation .page-nation-group .design1").classList.add("on");//기본으로 1번버튼에 클래스 on 추가


/* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////
    //currentPageNationGroupDesign 초기화
  currentPageNationGroupDesign = 0; //currentPageNationGroupDesign 수정
  //기존 prev next 제거
  document.querySelector(".prev-group .prev").remove();
  document.querySelector(".next-group .next").remove();
  //prev next 생성
  let prevGroup = document.querySelector(".page-nation .prev-group");
  let nextGroup = document.querySelector(".page-nation .next-group");
  let createDivPrev = document.createElement("div");
  let createDivNext = document.createElement("div");
  createDivPrev.innerHTML = "이전";
  createDivNext.innerHTML = "다음";
  createDivPrev.classList.add("prev");
  createDivNext.classList.add("next");
  prevGroup.append(createDivPrev);
  nextGroup.append(createDivNext);
  //페이지 네이션 그룹 표시 함수
  function displayPageNationGroup(num) {
    //페이지 네이션 숨기기
    for (nb of pageNations) {
      nb.classList.add("hide");
    }
    let totalPagenationGroupCount = Math.ceil(designPnCount / pageNationShow); //designePnCount수정
    let pageNationsArr = [...pageNations];
    let start = num * pageNationShow;
    let end = start + pageNationShow;
    let PageNationListArr = pageNationsArr.slice(start, end);
    for (item of PageNationListArr) {
      item.classList.remove("hide");
    }
    //pagenation group prev 버튼 hide show
    let prev = document.querySelector(".page-nation .prev");
    if (currentPageNationGroupDesign === 0) { //currentPageNationGroupDesign 수정
      
      prev.classList.add("hide");
    } else {
      prev.classList.remove("hide");
    }
     //pagenation group next 버튼 hide show
    let next = document.querySelector(".page-nation .next");
    if (currentPageNationGroupDesign === totalPagenationGroupCount - 1) { //currentPageNationGroupDesign 수정
      
      next.classList.add("hide");
    } else {
      next.classList.remove("hide");
    }
  }
  displayPageNationGroup(0);//함수 실행
  //넥스트 버튼 클릭할 때
  let next = document.querySelector(".page-nation .next");
  next.addEventListener("click", function () {
    //페이지네이션 3묶음당 1개씩 보여주기
    let nextPagenationNum = currentPageNationGroupDesign*pageNationShow+pageNationShow; //currentPageNationGroupDesign 수정
    displayPortfolioDesign(nextPagenationNum); //displayPortfolioDesign 수정
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[nextPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 증가시키기
    ++currentPageNationGroupDesign; //currentPageNationGroupDesign 수정 
    //증가되는 번호 페이지네이션 그룹함수에 넘겨주기
    displayPageNationGroup(currentPageNationGroupDesign); //currentPageNationGroupDesign 수정 
   
  });
    
  //프레브 버튼 클릭할 때
let prev = document.querySelector(".page-nation .prev");
  prev.addEventListener("click", function () {
     //페이지네이션 3묶음당 1개씩 보여주기
    let prevPagenationNum = currentPageNationGroupDesign*pageNationShow-pageNationShow; //currentPageNationGroupDesign 수정 
    displayPortfolioPage(prevPagenationNum); // displayPortfolioPage 수정
    //페이지네이션 on클래스 모두 제거
     for (item of pageNations) {
       item.classList.remove("on");
    }
    //페이지네이션 제일 앞부분 on클래스 주기
    pageNations[prevPagenationNum].classList.add("on");
    //페이지네이션 그룹 번호 1씩 감소
    --currentPageNationGroupDesign; //currentPageNationGroupDesign 수정 
    //감소되는 번호 페이지네이션 그룹함수에 할당하기
    displayPageNationGroup(currentPageNationGroupDesign); //currentPageNationGroupDesign 수정 
    
  });
/* 여기까지 prev + next 버튼 *////////////////////////////////////////////////////////////////////////////////////////////////




//페이지 네이션 넘버 클릭 이벤트
  pageNations.forEach((pageNation, idx, array) => {
    pageNation.addEventListener("click", (e) => {
      //on 클래스 제거
      for (i = 0; i < array.length; i++){
          array[i].classList.remove("on");
      }
      //클릭한 것만 on 클래스 추가
      e.target.classList.add("on");
      //해당 버튼을 누를때 마다 10개씩 보여주기
      displayPortfolioDesign(idx);
        
      });
  });
 
});
function displayPortfolioDesign(idx) {
  let designItems = document.querySelectorAll(".portfolio div.design");
  let itemsArray = Array.from(designItems);//items를 배열로 만듦 방법2. [...items]이것도 가능
  let start = idx * eachPageShow;
  let last = start + eachPageShow;
  for (ia of itemsArray) {
    ia.classList.add("hide");
  }
  let showPortfoliosall = itemsArray.slice(start, last);
  for (spall of showPortfoliosall) {
    spall.classList.remove("hide");
  }
};
//////////////////////////////////////////////////The end design 버튼 누를 때



/* 페이드 인 */
/* fade-in */
const fadeEls = document.querySelectorAll('.title-wrap .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 1,
    opacity: 1
  });
});

/* Birth */
let today = new Date();
let nowYear = today.getFullYear();
let ThisBirth = new Date(nowYear, 10, 10);
let NextBirth = new Date(nowYear + 1, 10, 10);
let diffDate;
let result;

if (ThisBirth < today) {
  diffDate = NextBirth.getTime() - today.getTime();
  result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
} else {
  diffDate = ThisBirth.getTime() - today.getTime();
  result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
}

let birth = document.querySelector(".d-day")
birth.textContent = "D-day" + " " + result;


/* Top버튼 */
/* 퍼센트로 스크롤 구하기 */
var btt = document.querySelector("#back-to-top");
var docElem = document.documentElement; //문서 전체를 담는 변수
var maxScrollValue = document.body.offsetHeight - window.innerHeight; 
  
window.addEventListener("resize", function () {
maxScrollValue = document.body.offsetHeight - window.innerHeight; 

      
});

window.addEventListener("scroll", function () {
    const scrollPer = pageYOffset / maxScrollValue; //현재 스크롤 위치값 / 위에서 구한(문서 전체 높이값)
      var percent = scrollPer * 100; // 0부터 ~ 1까지 비율 * 100 (100을 곱해주므로써 100단위로 만든다.)
    if (percent > 75) {
    btt.classList.add("visible");
    } else {
      btt.classList.remove("visible");
    }
    });


btt.addEventListener('click',function(ev){
  ev.preventDefault(); 
  scrollToTop();
});

function scrollToTop(){
    var scrollInterval = setInterval(function(){
        if( pageYOffset!=0){
            window.scrollBy(0,-10);
        }else{
            clearInterval(scrollInterval);
        }
    });
}




