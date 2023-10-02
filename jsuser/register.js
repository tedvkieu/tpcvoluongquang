$(document).ready(function () {
    console.log("ok")

    var email = ["dvkieu165@gmail.com", "sedvkieu@gmail.com"];
    var user = ["dvkieu165", "kieuko"];

    $(".btnthem").click(function () {
        var ojdata = {
            type_user: $(".txtsdt").val(),
            type_sdt: $(".txtuser").val(),
            type_pass:   $(".txtpass").val(),
            type_email:  $(".txtemail").val()
        }
        console.log(ojdata);
        for (i = 0; i < 2; i++){
            if (ojdata.type_email == email[i] || ojdata.type_user == user[i]) {
                alert("Email or User name already exists");
                resetView();
                break;
            } else {
                if (i == 1) {
                    alert("Account successfully created");
                    resetView();
                    break;
                }
                continue;
            }
        }
    });
});
function resetView() {
    $(".txtpass").val("");
    $(".txtemail").val("");
    $(".txtsdt").val("");
    $(".txtuser").val("");
    $(".txtemail").focus();
}