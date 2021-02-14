let myForm = document.querySelector("form");
let agreeCheck = document.querySelector("input[name='checkbox']");

agreeCheck.addEventListener("click", function() {
    let myBtn = document.querySelector(".btn");
    if (this.checked) {
        myBtn.removeAttribute("disabled");
    } else {
        myBtn.setAttribute("disabled", "true");
    }
});

myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/;

    let email = document.querySelector("input[name='email']");
    let emailRepeat = document.querySelector("input[name='emailR']");
    let pass = document.querySelector("input[name='password']");
    let passRepeat = document.querySelector("input[name='passwordR']");
    let name = document.querySelector("input[name='name']");
    let phone = document.querySelector("input[name='phone']");
    let city = document.querySelector("input[name='city']");
    let selectInput = document.querySelector("select[name='select']");
    let gender = document.querySelectorAll("input[name='gender']");

    if (!email.value.match(regexEmail)) {
        email.previousElementSibling.style.color = "red";
    } else {
        email.previousElementSibling.style.color = "";
    }

    if (!pass.value.match(regexPass)) {
        pass.previousElementSibling.style.color = "red";
    } else {
        pass.previousElementSibling.style.color = "";
    }

    if (email.value != emailRepeat.value) {
        email.previousElementSibling.style.color = "red";
        emailRepeat.previousElementSibling.style.color = "red";
    } else {
        email.previousElementSibling.style.color = "";
        emailRepeat.previousElementSibling.style.color = "";
    }

    if (pass.value != passRepeat.value) {
        pass.previousElementSibling.style.color = "red";
        passRepeat.previousElementSibling.style.color = "red";
    } else {
        pass.previousElementSibling.style.color = "";
        passRepeat.previousElementSibling.style.color = "";
    }

    checkRequired(email);
    checkRequired(emailRepeat);
    checkRequired(pass);
    checkRequired(passRepeat);
    checkRequired(name);
    checkRequired(phone);
    checkRequired(city);

    if (selectInput.value == "empty") {
        selectInput.previousElementSibling.style.color = "red";
    } else {
        selectInput.previousElementSibling.style.color = "";
    }

    if (!checkRadio(gender)) {
        document.querySelector(".important").style.color = "red";
    } else {
        document.querySelector(".important").style.color = "";
    }
});

function checkRequired(input) {
    if (input.value == "" || input.value == null) {
        input.previousElementSibling.style.color = "red";
    } else {
        input.previousElementSibling.style.color = "";
    }
}

function checkRadio(items) {
    let result = false;
    items.forEach((item) => {
        if (item.checked) {
            result = true;
        }
    });
    return result;
}