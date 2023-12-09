/*------------------------------ (DECLARATIONS) ------------------------------*/

let home = document.getElementById('navLink-home');
let aboutUs = document.getElementById('navLink-aboutUs');
let faq = document.getElementById('navLink-faq');
let header = document.getElementById('headerContainer');
let main = document.getElementById('mainContainer');
let footer = document.getElementById('footerContainer');
let asideAboutUs = document.getElementById('asideContainer-aboutUs');
let asideFaq = document.getElementById('asideContainer-faq');
let asideUser = document.getElementById('asideContainer-userSelection');
let asideAdmin = document.getElementById('asideContainer-adminSelection');
let asideUserRegister = document.getElementById('asideContainer-userRegister');
let asideUserLogin = document.getElementById('asideContainer-userLogin');
let asideAdminRegister = document.getElementById('asideContainer-adminRegister');
let asideAdminLogin = document.getElementById('asideContainer-adminLogin');

/*------------------------------ (NAVIGATION LINKS) ------------------------------*/

document.getElementById('navLink-home').addEventListener('click', function() {

    header.style.display = 'block';
    main.style.display = 'block';
    footer.style.display = 'block';
    asideAboutUs.style.display = 'none';
    asideUser.style.display = 'none';
    asideFaq.style.display = 'none';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
    home.classList.add('selected');
    aboutUs.classList.remove('selected');
    faq.classList.remove('selected');
})

document.getElementById('navLink-aboutUs').addEventListener('click', function() {

    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    asideAboutUs.style.display = 'block';
    asideFaq.style.display = 'none';
    asideUser.style.display = 'none';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
    home.classList.remove('selected');
    aboutUs.classList.add('selected');
    faq.classList.remove('selected');
})

document.getElementById('navLink-faq').addEventListener('click', function() {

    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    asideAboutUs.style.display = 'none';
    asideFaq.style.display = 'block';
    asideUser.style.display = 'none';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
    home.classList.remove('selected');
    aboutUs.classList.remove('selected');
    faq.classList.add('selected');
})

/*------------------------------ (LOGIN LINKS) ------------------------------*/

document.getElementById('selectionLink-userLink').addEventListener('click', function() {

    main.style.display = 'none';
    asideUser.style.display = 'block';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
})

document.getElementById('selectionLink-adminLink').addEventListener('click', function() {

    main.style.display = 'none';
    asideUser.style.display = 'none';
    asideAdmin.style.display = 'block';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
})

/*------------------------------ (USER LINKS) ------------------------------*/

document.getElementById('userSelectionLink-register').addEventListener('click', function() {

    main.style.display = 'none';
    asideUser.style.display = 'none';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'block';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
})

document.getElementById('userSelectionLink-login').addEventListener('click', function() {

    main.style.display = 'none';
    asideUser.style.display = 'none';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'block';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
})

/*------------------------------ (ADMIN LINKS) ------------------------------*/

document.getElementById('adminSelectionLink-register').addEventListener('click', function() {

    main.style.display = 'none';
    asideUser.style.display = 'none';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'block';
    asideAdminLogin.style.display = 'none';
})

document.getElementById('adminSelectionLink-login').addEventListener('click', function() {

    main.style.display = 'none';
    asideUser.style.display = 'none';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'block';
})

/*------------------------------ (EXIT SELECTION BUTTON) ------------------------------*/

function exitButtonSelection() {
    
    main.style.display = 'block';
    asideUser.style.display = 'none';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
}

let exitIdSelection = ['userSelectionExit', 'adminSelectionExit'];

exitIdSelection.forEach(function(exitIdSelection) {

    document.getElementById(exitIdSelection).addEventListener('click', exitButtonSelection);
})

/*------------------------------ (EXIT USER BUTTON) ------------------------------*/

function exitButtonUser() {

    main.style.display = 'none';
    asideUser.style.display = 'block';
    asideAdmin.style.display = 'none';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
}

let exitIdUser = ['userRegisterExit', 'userLoginExit'];

exitIdUser.forEach(function(exitIdUser) {

    document.getElementById(exitIdUser).addEventListener('click', exitButtonUser);
})

/*------------------------------ (EXIT ADMIN BUTTON) ------------------------------*/

function exitButtonAdmin() {

    main.style.display = 'none';
    asideUser.style.display = 'none';
    asideAdmin.style.display = 'block';
    asideUserRegister.style.display = 'none';
    asideUserLogin.style.display = 'none';
    asideAdminRegister.style.display = 'none';
    asideAdminLogin.style.display = 'none';
}

let exitIdAdmin = ['adminRegisterExit', 'adminLoginExit'];

exitIdAdmin.forEach(function(exitIdAdmin) {

    document.getElementById(exitIdAdmin).addEventListener('click', exitButtonAdmin);
})

/*------------------------------ (TUA LOGO LINK) ------------------------------*/

document.getElementById('headerLogo-wrapper').addEventListener('click', function() {

    window.open('https://www.tua.edu.ph/');
})

/*------------------------------ (FOOTER LINK) ------------------------------*/

document.getElementById('fa-google').addEventListener('click', function() {

    window.open('https://mail.google.com/');
})

document.getElementById('fa-facebook').addEventListener('click', function() {

    window.open('https://www.facebook.com/');
})

document.getElementById('fa-instagram').addEventListener('click', function() {

    window.open('https://www.instagram.com/');
})

document.getElementById('fa-github').addEventListener('click', function() {

    window.open('https://github.com/');
})

document.getElementById('fa-tiktok').addEventListener('click', function() {

    window.open('https://www.tiktok.com/en/');
})

document.getElementById('fa-discord').addEventListener('click', function() {

    window.open('https://discord.com/');
})

/*------------------------------ (FORM PASSWORD VISIBILITY) ------------------------------*/

document.getElementById('fa-eye-slash1').addEventListener('click', function() {

    let passwordInput = document.getElementById('userPassword-register');
    let visibilityButton = document.getElementById('fa-eye-slash1');

    visibilityButton.classList.add('fa-eye-slash');

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        visibilityButton.classList.remove("fa-eye-slash");
        visibilityButton.classList.add("fa-eye");

      } else {

        passwordInput.type = "password";
        visibilityButton.classList.remove("fa-eye");
        visibilityButton.classList.add("fa-eye-slash");
      }
})

document.getElementById('fa-eye-slash2').addEventListener('click', function() {

    let passwordInput = document.getElementById('userPassword-login');
    let visibilityButton = document.getElementById('fa-eye-slash2');

    visibilityButton.classList.add('fa-eye-slash');

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        visibilityButton.classList.remove("fa-eye-slash");
        visibilityButton.classList.add("fa-eye");

      } else {

        passwordInput.type = "password";
        visibilityButton.classList.remove("fa-eye");
        visibilityButton.classList.add("fa-eye-slash");
      }
})

document.getElementById('fa-eye-slash3').addEventListener('click', function() {

    let passwordInput = document.getElementById('adminPassword-register');
    let visibilityButton = document.getElementById('fa-eye-slash3');

    visibilityButton.classList.add('fa-eye-slash');

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        visibilityButton.classList.remove("fa-eye-slash");
        visibilityButton.classList.add("fa-eye");

      } else {

        passwordInput.type = "password";
        visibilityButton.classList.remove("fa-eye");
        visibilityButton.classList.add("fa-eye-slash");
      }
})

document.getElementById('fa-eye-slash4').addEventListener('click', function() {

    let passwordInput = document.getElementById('adminPassword-login');
    let visibilityButton = document.getElementById('fa-eye-slash4');

    visibilityButton.classList.add('fa-eye-slash');

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        visibilityButton.classList.remove("fa-eye-slash");
        visibilityButton.classList.add("fa-eye");

      } else {

        passwordInput.type = "password";
        visibilityButton.classList.remove("fa-eye");
        visibilityButton.classList.add("fa-eye-slash");
      }
})