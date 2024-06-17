var swiper = new Swiper(".swiper", {
	effect: "cube",
	allowTouchMove: false,
	grabCursor: false,
	cubeEffect: {
	  shadow: true,
	  slideShadows: true,
	  shadowOffset: 20,
	  shadowScale: 0.94 },
  
	mousewheel: true });
  
  swiper.on('slideChange', function () {
	for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
	Array.from(document.querySelectorAll(".Links li"))[swiper.activeIndex].classList.add("activeLink");
  
  });
  function Navigate(indx) {
	for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
	Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
	swiper.slideTo(indx, 1000, true);
  }

  $(".heading_navigator nav label").click(function(){$(".heading_navigator nav label").removeClass();})
  $("#toggle-1").click(function(){$("#toggle-1").addClass("active_project_heading")})
  $("#toggle-2").click(function(){$("#toggle-2").addClass("active_project_heading")})
  $("#toggle-3").click(function(){$("#toggle-3").addClass("active_project_heading")})