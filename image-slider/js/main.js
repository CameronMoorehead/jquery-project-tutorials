$(document).ready(() => {
  $(".next").on("click", function() {
    let currentImg = $(".active")
    let nextImg = currentImg.next()
    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10)
      nextImg.addClass("active").css("z-index", 10)
    } else {
      nextImg = $(".slider-inner").children().first()
      currentImg.removeClass("active").css("z-index", -10)
      nextImg.addClass("active").css("z-index", 10)
    }
  })
  $(".prev").on("click", function() {
    let currentImg = $(".active")
    let prevImg = currentImg.prev()
    if (prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10)
      prevImg.addClass("active").css("z-index", 10)
    } else {
      prevImg = $(".slider-inner").children().last()
      currentImg.removeClass("active").css("z-index", -10)
      prevImg.addClass("active").css("z0index", 10)
    }
  })
})
