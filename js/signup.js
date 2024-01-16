var signUpName = document.getElementById('signName');
var signUpEmail = document.getElementById('signEmail');
var signUpPass = document.getElementById('signPassword');
var signUpbtn = document.getElementById('signUp');
signInLink = document.getElementById('signInLink')
var usersArr = [];

if (localStorage.getItem('users') != null) {
    usersArr = JSON.parse(localStorage.getItem('users'))
} else {
    usersArr = [];
}

function signUp() {


    if (signUpName.value == "" || signUpEmail.value == "" || signUpPass.value == "") {


        document.getElementById('message').innerHTML = `<p class="text-center text-danger">All Inputs Is Requierd</p>`
    } else {
        var obj = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPass.value
        }
        usersArr.push(obj)
            // console.log(obj);
        document.getElementById('message').innerHTML = `<p class="text-center text-success">Sucess</p>`

        localStorage.setItem('users', JSON.stringify(usersArr))
        window.location = './index.html'
    }
}

signUpbtn.addEventListener('click', signUp)

signInLink.addEventListener('click', function() {
    window.location = './index.html'

})