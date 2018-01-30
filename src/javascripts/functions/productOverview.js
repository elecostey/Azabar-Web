const productOverview = function() {
    const productBtn = $('.products__btn');
    let delay;

    productBtn.hover(
    function() {
        delay = setTimeout(function(){
            $(this).siblings('.products__preview-img').fadeIn();
        }, 600);
    },
    function() {
        clearTimeout(delay);
        $(this).siblings('.products__preview-img').fadeOut();
    });
};

export default productOverview;