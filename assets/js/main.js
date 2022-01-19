// showing menu Y
if ($('#nav__toggle')) {
  $('#nav__toggle').click(function () {
    $('#nav__menu').addClass('show-menu')
  })
}

if ($('#nav__close')) {
  $('#nav__close').click(function () {
    $('#nav__menu').removeClass('show-menu')
  })
}
//点击link图标后隐藏

$('.nav__link').click(function () {
  $('#nav__menu').removeClass('show-menu')
})

// 获取技能点

$('.skills__list .skills_number').each(function () {
  // alert($(this).text())
  // console.log( typeof $(this).text());
  $(this).parent().siblings('.skills__bar').children('.skills__percentage').css('width', $(this).text())
})

$('.skills__header').click(function () {
  // console.log(typeof $(this).attr("class")); 返回string
  if ($(this).parent().attr('class') === 'skills__content skills__open') {
    $(this).parent().removeClass().addClass('skills__content skills__close')


  } else {
    $(this).parent().removeClass().addClass('skills__content skills__open')
   
  }
})

$(".qualification__container .qualification__button").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  $(".qualification__sections .qualification__content").eq($(this).index()).show().siblings().hide();
})