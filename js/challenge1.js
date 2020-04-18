function showHide() {
    var checkBox = document.getElementById("subscribe")
    if (checkBox.checked == true) {
        $("#emailDiv").show(1500)
    }
    else {
        $("#emailDiv").hide(1500)
    }

}

$("#subscribe").click(showHide)