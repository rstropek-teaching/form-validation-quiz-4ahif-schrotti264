$('button[type="submit"]').prop('disabled',true);
$('#emailMandatory').prop('hidden',true);
$('#otherMediaChannel').hide();

// Tip: Consider using verbs as method names (e.g. enableSubmit instead of submitEnabled)
function submitEnabled(){
    /*
    Check if Submit Button should be enabled or disabled
    */
    if($('#firstNameMandatory').attr('hidden') === 'hidden'
    && $('#lastNameMandatory').attr('hidden') === 'hidden'
    && $('#emailMandatory').attr('hidden') === 'hidden'
    ){
        $('button[type="submit"]').prop('disabled',false);
    }else{
        $('button[type="submit"]').prop('disabled',true);
    }
}

// Tip: Remember: Don't repeat yourself. #firstName- and -#lastName handlers are
//      very similar. Consider creating a method and calling it in both situations.
$('#firstName').keyup(() => {
    if($('#firstName').val()){
        $('#firstNameMandatory').prop('hidden',true);
        submitEnabled();
    }else{
        $('#firstNameMandatory').prop('hidden',false);
        submitEnabled();
    }
});

$('#lastName').keyup(() => {
    if($('#lastName').val()){
        $('#lastNameMandatory').prop('hidden',true);
        submitEnabled();
    }else{
        $('#lastNameMandatory').prop('hidden',false);
        submitEnabled();
    }
});

function newsletterEmail(){
    /*
    function being called when email-input or newsletter-checkbox change
    */
    if($('#email').val() || $('#newsletter:checked').length < 1){
        $('#emailMandatory').prop('hidden',true);
        submitEnabled();
    }else{
        $('#emailMandatory').prop('hidden',false);
        submitEnabled();
    }
}
$('#email').keyup(newsletterEmail);

$('#mediaChannelSelect').change(() => {
    // Tip: Don't check in console.log statements if they are just used for debugging purposes
    console.log($('#otherMediaChannel'));
    if($('option:selected')[0].innerText === 'Other'){
        $('#otherMediaChannel').show();
    }else{
        $('#otherMediaChannel').hide();
    }
});

$('#newsletter').change(newsletterEmail);
