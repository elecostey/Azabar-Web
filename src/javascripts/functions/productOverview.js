const productOverview = function() {
    const productBtn = $('.products__btn');
    let delay;

    productBtn.hover(
    function() {
        const self = $(this);
        delay = setTimeout(function(){
            self.siblings('.products__preview-img').fadeIn();
        }, 600);
    },
    function() {
        const self = $(this);
        clearTimeout(delay);
        self.siblings('.products__preview-img').fadeOut();
    });
};

export default productOverview;