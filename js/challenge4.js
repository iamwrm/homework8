$("form").submit(function (event) {


    var name_i = document.getElementById("name")
    var addr_i = document.getElementById("addr")


    console.log(name_i.value)
    if (name_i.value == "") {
        $("#nameError").show()
    } else {
        $("#nameError").hide()
    }
    if (addr_i.value == "") {
        $("#addrError").show()
    } else {
        $("#addrError").hide()
    }
    if ((name_i.value == "") || (addr_i.value == "")) {
        event.preventDefault();
    }

});

var form_e = document.getElementById("challenge4_form").method= "get"
