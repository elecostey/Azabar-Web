const togglePipeVisibility = function() {
    
    const firstParagraph = $('.box--white p:nth-child(1)');

    firstParagraph.each(function() {
        const self = $(this);
        const secondParagraph = self.siblings();
        if (secondParagraph.offset().top > self.offset().top) {
            self.parent().removeClass('box--pipe');
        } else {
            self.parent().addClass('box--pipe');
        }
    }); 
};

export default togglePipeVisibility;