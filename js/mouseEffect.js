
  
document.querySelector(".menu").addEventListener("click", function () {

  

window.addEventListener("mousemove", function (event) {
  let x = event.pageX  -10 + "px;";
  let xf = event.pageX  -25 + "px;";
  let y = event.pageY  -10 + "px;";
  let yf = event.pageY  -25 + "px;";
  document.querySelector(".menu-modal .cursor").style.cssText = "left:" + x + " top:" + y;
  document.querySelector(".menu-modal .cursorfollow").style.cssText = "left:"  + xf + " top:"  + yf;

  
  document.querySelector(".menu-modal .cursorfollow").animate([
    {left: event.pageX -25 + "px",top: event.pageY - 25+ "px"},
    {left:event.pageX - 25 + "px", top: event.pageY - 25 + "px"}
  ], {delay:100,duration:100});

});
document.querySelectorAll("span").forEach((el) => {
    let style = el.getAttribute("class");
    
    el.addEventListener("mouseover", () => {
      document.querySelector(".menu-modal .cursor").classList.add(style);
    });

    el.addEventListener("mouseout", () => {
      document.querySelector(".menu-modal .cursor").classList.remove(style);
  });
  
});
});
  


