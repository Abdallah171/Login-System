var loginEmail = document.getElementById('loginEmail')
var loginPass = document.getElementById('loginPassword')
var registerbtn = document.getElementById('register')
var loginBtn = document.getElementById('login');
var usersArr = [];

usersArr = JSON.parse(localStorage.getItem('users'))



registerbtn.addEventListener('click', function() {
    window.location = './signup.html'
})


loginBtn.addEventListener('click', function() {


    if (loginEmail.value == "" || loginPass.value == "") {


        document.getElementById('message').innerHTML = `<p class="text-center text-white">All Inputs Is Requierd</p>`
    } else
        checkUser();

})

function checkUser() {
    for (let i = 0; i < usersArr.length; i++) {
        if (loginEmail.value == usersArr[i].email && loginPass.value == usersArr[i].password) {
            var un = usersArr[i].name
            localStorage.setItem('userName', un);
            window.location = './home.html';
            break;
        } else {
            document.getElementById('message').innerHTML = `<p class="text-center text-danger">email or password incorrect</p>`
        }
    }

}