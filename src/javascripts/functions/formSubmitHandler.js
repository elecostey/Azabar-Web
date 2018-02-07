const formSubmitHandler = function() {
    $('form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: '../../send-email.php',
            data: $('form').serialize(),
            success: function (response) {
                console.log(response);
                $('.contact__success-mail').text(response);
                $('.contact__success-mail').fadeIn();
            }
        });
    });
};

export default formSubmitHandler;