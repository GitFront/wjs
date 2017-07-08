$(function () {
    // 轮播图js改变播放速度
    $('.carousel').carousel({
        interval: 3000
    });
    // Tooltips提示
    $('.baby span').tooltip();
// 手势触摸轮播
    var myElement = document.getElementById('myCarousel');
    var hm = new Hammer(myElement);
    hm.on("swipeleft", function () {
        $('#myCarousel').carousel('next');
    })
    hm.on("swiperight", function () {
        $('#myCarousel').carousel('prev');
    })
})