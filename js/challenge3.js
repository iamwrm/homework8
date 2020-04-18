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
    var formValid = 0;
    // 0 -> no selected
    // 

    var i = 0;
    while (i < radios.length) {
        if (radios[i].checked) formValid += 1;
        i++;
    }
    return formValid;
}


$("form").submit(function (event) {
    var standing_valid = validateForm("standing")
    var grad_valid = validateForm("gradDate")
    if ((standing_valid == 0) && (grad_valid == 0)) {
        alert('You must select a standing and graduation date.')
        event.preventDefault();
        return
    }
    if (!(standing_valid == 1) && (grad_valid == 1)) {
        alert('You must select a standing.')
        event.preventDefault();
        return
    }
    if ((standing_valid == 1) && !(grad_valid == 1)) {
        alert('You must select a graduation date')
        event.preventDefault();
        return
    }
});