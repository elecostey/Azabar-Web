const referencesPreview = function() {
    const referencesPreview = $('.references__preview');
    const referencesPreviewImg = $('.references__preview-img');
    const referencesPreviewContainer = $('.references__preview-container');
    const referencesPreviewCloseBtn = $('.references__preview-close');
    let delay;

    referencesPreview.hover(
        function() {
            const self = $(this);
            delay = setTimeout(function() {
                const imgSrc = self.children().attr('src');
                if (imgSrc) {
                    referencesPreviewImg.css('background-image', `url(${imgSrc})`);
                    referencesPreviewContainer.fadeIn();
                }
            }, 800);
        },
        function() {
            clearTimeout(delay);
        }
    );

    referencesPreviewCloseBtn.click(function() {
        referencesPreviewContainer.fadeOut();
    });
};

export default  referencesPreview;