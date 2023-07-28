$(function(){

    $('.faq-tab-head').on('click', function(){
        //$('.faq-tab').removeClass('active');
        $(this).parent().toggleClass('active').siblings().removeClass('active');
    });
  
    const swiperBlog = new Swiper('.swiper-blog', {
        speed: 500,
        spaceBetween: 0,
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
  
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            }
        },
        navigation: {
            nextEl: ".swiper-button-next-blog",
            prevEl: ".swiper-button-prev-blog",
        },
        pagination: {
            el: ".swiper-pagination-blog",
        },
        loop: true,
    });
  
    const swiperFasion_1 = new Swiper('.swiper-fashion-1', {
        speed: 500,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next-fashion-1",
            prevEl: ".swiper-button-prev-fashion-1",
        },
        pagination: {
            el: ".swiper-pagination-fashion-1",
        },
        loop: true,
    });
  
    const swiperFasion_2 = new Swiper('.swiper-fashion-2', {
        speed: 500,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next-fashion-2",
            prevEl: ".swiper-button-prev-fashion-2",
        },
        pagination: {
            el: ".swiper-pagination-fashion-2",
        },
        loop: true,
    });
  
    const swiperFasion_3 = new Swiper('.swiper-fashion-3', {
        speed: 500,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next-fashion-3",
            prevEl: ".swiper-button-prev-fashion-3",
        },
        pagination: {
            el: ".swiper-pagination-fashion-3",
        },
        loop: true,
    });
  
    const swiperFasion_4 = new Swiper('.swiper-fashion-4', {
        speed: 500,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next-fashion-4",
            prevEl: ".swiper-button-prev-fashion-4",
        },
        pagination: {
            el: ".swiper-pagination-fashion-4",
        },
        loop: true,
    });
  
    const swiperFasion_5 = new Swiper('.swiper-fashion-5', {
        speed: 500,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next-fashion-5",
            prevEl: ".swiper-button-prev-fashion-5",
        },
        pagination: {
            el: ".swiper-pagination-fashion-5",
        },
        loop: true,
    });
  
    const swiperFasion_6 = new Swiper('.swiper-fashion-6', {
        speed: 500,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next-fashion-6",
            prevEl: ".swiper-button-prev-fashion-6",
        },
        pagination: {
            el: ".swiper-pagination-fashion-6",
        },
        loop: true,
    });
  
    $('.scroll').on('click', function(e){
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
  
    $('.service-tabs li span').on('click', function(){
        $(this).parents('li').addClass('active').siblings().removeClass('active');
        const target = $(this).parents('li').data('target');
        $(target).addClass('active').siblings().removeClass('active');
    });
  
    $('.play').on('click', function(e){
        e.preventDefault();
  
        var mediaVideo = $("#video-01").get(0);
        if (mediaVideo.paused) {
            mediaVideo.play();
            $(this).addClass('hidden');
        } else {
            mediaVideo.pause();
            $(this).removeClass('hidden');
        }
    });
  
    $(window).on('scroll', function(){
  
        if ($(window).width() > 991) {
            var top = $('#about-1').offset().top;
            if (top < window.pageYOffset + 150) {
                $('#video-1').addClass('active');
  
                setTimeout(function(){
                    var mediaVideo = $("#video-01").get(0);
                        mediaVideo.play();
                        $('.play').addClass('hidden');
                }, 6000);
            }
        } else {
            var top = $('#video-11').offset().top;
            if (top < window.pageYOffset + 300) {
                $('#video-2').addClass('active');
  
                setTimeout(function(){
                    var mediaVideo = $("#video-02").get(0);
                    mediaVideo.play();
                    $('.play').addClass('hidden');
                }, 6000);
            }
        }
  
    });
  
    //$(document).bind('contextmenu', function(e) {
    //    return false;
    //});
  
  });
  
  const showBtn = document.querySelector('.show-btn-show')
  const showBlock = document.querySelector('.btn-show')
  showBtn.addEventListener('click', function(){
    showBlock.classList.add('show-block')
    showBtn.classList.add('show-block-hidden')
  })
  
  
  
  // Получаем необходимые элементы
  let openModalBtn = document.querySelectorAll(".openModalBtn");
  let openModalBtn2 = document.querySelectorAll(".openModalBtn2");
  let modal = document.getElementById("myModal");
  let modal2 = document.getElementById("myModal2");
  let successModal = document.getElementById("successModal");
  let successModal2 = document.getElementById("successModal2");
  let closeBtns = document.getElementsByClassName("close");
  let forms = document.querySelectorAll(".myForm");
  let modalTitle = document.getElementById("modalTitle");
  let modalPrice = document.getElementById("modalPrice");
  
  // Открытие модального окна
  for (const bntShow of openModalBtn) {
    bntShow.addEventListener("click", function() {
        modal.style.display = "block";
    });    
  }
  for (const bntShow of openModalBtn2) {
    bntShow.addEventListener("click", function() {
        modal2.style.display = "block";
    });    
  }
  // Открытие модального окна и изменение заголовка
  for (var i = 0; i < openModalBtn2.length; i++) {
    openModalBtn2[i].addEventListener("click", function() {
        var title = this.getAttribute("data-title");
        var price = this.getAttribute("data-price");
        modalTitle.textContent = title;
        modalPrice.textContent = price;
    });
  }
  
  // Закрытие модального окна
for (var i = 0; i < closeBtns.length; i++) {
closeBtns[i].addEventListener("click", function() {
    modal.style.display = "none";
    modal2.style.display = "none";
    successModal.style.display = "none";
    successModal2.style.display = "none";
});

}
  // Отправка формы и отображение модального окна "Отправлено!"
for (const form of forms) {
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Предотвращаем отправку формы
        // Отправка данных формы (здесь можно добавить логику отправки на сервер)
        modal.style.display = "none";
        modal2.style.display = "none";
        successModal.style.display = "block";
        successModal2.style.display = "block";
    });   
}
