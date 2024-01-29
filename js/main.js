$(function () {
    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
        $(window).scrollTop(0);
    });

    // Menü bağlantılarına tıklama olayı ekle
    $('.menu a').on('click', function () {
        $('.menu-trigger').removeClass('active'); // Menü düğmesini kapat
        $('.menu').removeClass('active'); // Menüyü kapat
        $(window).scrollTop(0); // Sayfayı en üste getir (isteğe bağlı)
    });


    window.addEventListener("scroll", function () {
        var header = this.document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })

    window.addEventListener('load', function() {
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
    });
});