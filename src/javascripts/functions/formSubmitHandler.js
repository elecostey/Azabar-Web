const formSubmitHandler = function() {
    const successMsg = $('.contact__success-mail');
    const sendingGif = $('.contact__sending-gif');
    const recaptchaFailMsg = $('.contact__recaptcha-fail');

    $('form').on('submit', function (e) {
        sendingGif.siblings().hide();
        sendingGif.fadeIn();
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '../../send-email.php',
            data: $('form').serialize(),
            success: function (response) {
                const result = response.toString();
                if (result == 'success') {
                    sendingGif.fadeOut(function() {
                        $('.contact form')[0].reset();
                        grecaptcha.reset();
                        successMsg.fadeIn();
                    });
                } 
                else if (result == 'fail') {
                    sendingGif.fadeOut(function() {
                        recaptchaFailMsg.fadeIn();
                    });
                }       
            }
        });
    });
};

export default formSubmitHandler;