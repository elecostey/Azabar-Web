const getEmailSubject = function() {
    const subjectText = $('#subject-text');
    const selectedInput = $('input[name=subject]:checked');
    const inputLabel = $('.input-checkbox label');

    subjectText.val(selectedInput.next().text());

    inputLabel.click(function() {
        const selectedInputText = $(this).text();
        subjectText.val(selectedInputText);
    });
};

export default getEmailSubject;