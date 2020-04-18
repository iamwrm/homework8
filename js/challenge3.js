$(document).ready(function () {
    const chbx = document.getElementsByName("standing");
    for (let i = 0; i < chbx.length; i++) {
        chbx[i].checked = false;
    }
    const chbx1 = document.getElementsByName("gradDate");
    for (let i = 0; i < chbx1.length; i++) {
        chbx1[i].checked = false;
    }
})

function validateForm(i_name) {
    var radios = document.getElementsByName(i_name);
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }
    return formValid;
}


$("form").submit(function (event) {
    // if ( $( "input" ).first().val() === "correct" ) {
    //   $( "span" ).text( "Validated..." ).show();
    //   return;
    // }

    // $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
    var standing_valid = validateForm("standing")
    var grad_valid = validateForm("gradDate")
    if (!standing_valid && !grad_valid) {
        alert('One and only one button should be selected from Standing and Grad Date Form')
        event.preventDefault();
        return;
    }

    if (!standing_valid) {
        alert('One and only one button should be selected from Standing Form')
        event.preventDefault();
        return;
    }
    if (!grad_valid) {
        alert('One and only one button should be selected from Grad Date Form')
        event.preventDefault();
        return;
    }


});