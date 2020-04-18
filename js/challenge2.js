function showHide() {
    var checkBox = document.getElementById("sameAddress")
    var bill = document.getElementById("bill")
    var home = document.getElementById("home")

    if (checkBox.checked == true) {
        home.disabled = true;
        home.value = bill.value
        home.style.backgroundColor = "#d1d1d1"
    } else {
        home.disabled = false;
        home.value = ""
        home.style.backgroundColor = "white"
    }
}

$("#sameAddress").click(showHide)