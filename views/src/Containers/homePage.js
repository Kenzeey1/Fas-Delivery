import { SignInForm } from '../Components/Form/form.js';
import { SignUpForm } from '../Components/Form/form.js';
import { homeNavbar } from '../Components/Navbars/homeNavbar.js';

export function homePageClient(){
    let form = SignInForm('client.png');
    let navbar = homeNavbar();
    return "<ul>" +
        "   <li>" +
        navbar +
        "   </li>" +
        "   <li id='form-container'>" +
        form +
        "   </li>" +
        "</ul>";
}

export function homePageDeliveryMan(){
    let form = SignInForm('livraison.png');
    let navbar = homeNavbar();
    return "<ul>" +
        "   <li>" +
        navbar +
        "   </li>" +
        "   <li id='form-container'>" +
        form +
        "   </li>" +
        "</ul>";
}

export function changeForm(){
    let changeFormButton = $('.cf');
    let signinForm = $('#signin-form');
    let signupForm = $('#signup-form');
    changeFormButton.on({
        click:function(){
            if(this.value === "createNewaccount"){
                $('#form-container').html(SignUpForm('client.png'));
            }else {
                $('#form-container').html(SignInForm('client.png'));
            }
            changeForm();
        }
    });
    signinForm.submit(function(){
        let email = $('#floatingInputEmail');
        let password = $('#floatingPassword');
        let test = 0;
        if(email.val() === ""){
            $(".ifb-email").show();
            $(".form-signin input[type='email']").css("border", "5px solid #F90A0A");
            test++;
        }else{
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if(!is_correctly_filed(email.val(),pattern,$(".ifb-email"),$(".form-signin input[type='email']"),"worong format for email adress."))test++;
        }
        if(password.val() === ""){
            $('.ifb-password').show();
            $(".form-signin input[type='password']").css("border", "5px solid #F90A0A");
            test++;
        }else{
            $('.ifb-password').hide();
        }
        return test === 0;
    });
    signupForm.submit(function(){
        let name = $('#floatingInputName');
        let fname = $("#floatingInputFN");
        let email = $("#floatingInputEmail");
        let phoneNumber = $('#floatingInputPN');
        let password = $("#floatingPassword");
        let test = 0;
        if(name.val() === ""){
            $(".ifb-name").show();
            $(".form-signin input[type='name']").css("border", "5px solid #F90A0A");
            test++;
        }else{
            let pattern = /^[a-zA-Z]*$/;
            if(!is_correctly_filed(name.val(),pattern,$(".ifb-name"),$(".form-signin input[type='name']"),"Should contain only Characters"))test++;
        }
        if(fname.val() === ""){
            $(".ifb-fname").show();
            $(".form-signin input[type='FN']").css("border", "5px solid #F90A0A");
            test++;
        }else{
            let pattern = /^[a-zA-Z]*$/;
            if(!is_correctly_filed(fname.val(),pattern,$(".ifb-fname"),$(".form-signin input[type='FN']"),"Should contain only Characters"))test++;
        }
        if(email.val() === ""){
            $(".ifb-email").show();
            $(".form-signin input[type='email']").css("border", "5px solid #F90A0A");
            test++;
        }else{
            let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            if(!is_correctly_filed(email.val(),pattern,$(".ifb-email"),$(".form-signin input[type='email']"),"worong format for email adress."))test++;
        }
        if(phoneNumber.val() === ""){
            $(".ifb-pn").show();
            $(".form-signin input[type='tel']").css("border", "5px solid #F90A0A");
            test++;
        }else{
            let pattern = /^[0-9]{10}$/;
            if(!is_correctly_filed(phoneNumber.val(),pattern,$(".ifb-pn"),$(".form-signin input[type='tel']"),"Should contain only numbers(10)"))test++;
        }
        if(password.val() === ""){
            $(".ifb-password").show();
            $(".form-signin input[type='password']").css("border", "5px solid #F90A0A");
            test++;
        }else{
            if(!checkPassword(password.val(),$(".ifb-password"),$(".form-signin input[type='password']"),"At least 8 characters."))test ++;
        }
        return test === 0;
    });
}

function checkPassword(password,element,container,alert){
    let password_length = password.length;
    if (password_length <= 8) {
        element.html(alert);
        element.show();
        container.css("border", "5px solid #F90A0A");
        return false;
    } else {
        element.hide();
        container.css("border","5px solid #34F458");
        return true;
    }
}

function is_correctly_filed(val,pattern,element,container,alert) {
    if (pattern.test(val)) {
        element.hide();
        container.css("border","5px solid #34F458");
        return true;
    } else {
        element.html(alert);
        element.show();
        container.css("border", "5px solid #F90A0A");
        return false;
    }
}


