var a = 1
console.log(1)
console.log(1)

function showHide() {
    var checkBox = document.getElementById("subscribe")
    console.log(checkBox.checked)
    $("#emailDiv").toggle(1500)

}

var checkBox = document.getElementById("subscribe")
checkBox.addEventListener('change', showHide);
