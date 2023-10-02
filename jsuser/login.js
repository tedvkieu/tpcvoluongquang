var email = ["sedvkieu@gmail.com", "dvkieu165@gmail.com"];
var pass = ["123456789", "123456789"];
var user = ["dvkieu165", "kieuko"];
var n=2;
$(document).ready(function () {
    console.log("ok")
    $(".btnthem").click(function () {
        var ojdata_dk = {
            type_user: $(".txtsdt").val(),
            type_sdt: $(".txtuser").val(),
            type_pass:   $(".txtpass").val(),
            type_email:  $(".txtemail").val()
        }
        console.log(ojdata_dk);
        if (ojdata_dk.type_email == '' ||ojdata_dk.type_sdt == ''||ojdata_dk.type_user == '') {
            alert("ban chua nhap thong tin");
        } else {
            for (i = 0; i < n - 1; i++) {
                if (ojdata_dk.type_email == email[i] || ojdata_dk.type_user == user[i]) {
                    alert("Email or User name already exists");
                    //resetView();
                    break;
                } else {
                    if (i == n - 2) {
                        alert("Account successfully created");
                        pass.push(ojdata_dk.type_pass);
                        email.push(ojdata_dk.type_email);
                        n = n + 1;
                        localStorage.setItem("n", n);
                        localStorage.setItem("email", email);
                        localStorage.setItem("pass", pass);
                        //resetView();
                        alert(pass[2]);
                        break;

                    }
                    continue;
                }
            }
        }
    });
    $(".btnlogin").click(function () {
        var ojdata = {
            type_pass:   $(".txtpass").val(),
            type_email:  $(".txtemail").val()
        }
        console.log(ojdata);

        if (ojdata.type_email == '') {
            alert("Please enter all information");
        } else {
            for (i = 0; i < n; i++){
                if ((ojdata.type_email == email[i] && ojdata.type_pass == pass[i])) {
                    alert("Successful login");
                    resetView();
                    break;
                } else {
                    if (i == n-1) {
                        alert("Email or Password is incorrect");
                        resetView();
                        break;
                    }
                    continue;
                }
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