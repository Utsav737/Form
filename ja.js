const scriptURL = 'https://script.google.com/macros/s/AKfycbw0rvWfQBS1PxU7lDX5HF5PXmgGs8f3ahnnJAEhp5hvlRlU2OkccgFYuh2I-Bm_TasS/exec'
const form = document.forms['knit_form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})



        function change_text() {
            var cb = document.getElementById("chk");
            if (cb.checked == true) {
                document.getElementById("demo").innerHTML = "<i>register</i>";

            }
            else {
                document.getElementById("demo").innerHTML = "form";
            }
        }


let sumbit = document.querySelector("#ok_form") ; 
let signup_change = document.querySelector("#signup_id") ; 
let login_id = document.querySelector("#login_id") ; 
let reg = document.querySelector("#register") ; 
let open_popup = () =>{
    console.log("hello!")  ;
    sumbit.classList.add("popup_imp") ; 
    signup_change.classList.add("signup_chg") ; 
    login_id.classList.add("login_chg")
}

let close_popup= () =>{

    sumbit.classList.remove("popup_imp") ; 
    signup_change.classList.remove("signup_chg") ; 
    login_id.classList.remove("login_chg") ; 
}

 

function check_submition(){

    let number = document.querySelector("#number").value ; 
let email = document.querySelector("#email").value ; 
let text = document.querySelector("#text").value ;
let number_startingDigit = /^[7-9]\d{9}$/;
let email_validation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    if(number =="" || text == "" || email == ""){
        // alert("information is incompleted !")  ;
        swal({
            title: "Incomplete Information !",
            text: "please fill out all required fields !",
            icon: "warning",
            button: "ok",
          });
        return false ; 
    }
    else if(number.length < 10 || number.length > 10){

        // alert("Number should be of 10 digit ! Please enter valid number. ") ; 
        swal({
            title: "Invalid Number !",
            text: "number should be of 10 digits",
            icon: "warning",
            button: "ok",
          });
    }
    else if(isNaN(number)){

        // alert("Only number are allowed ! Please enter valid number. ");
        swal({
            title: "Invalid ",
            text: "only numbers are allowed !",
            icon: "warning",
            button: "ok",
          });
    }
    else if (!number_startingDigit.test(number)){

        // alert("Please enter valid number !") ; 
        swal({
            title: "Invalid Number !",
            text: "please enter valid number ",
            icon: "warning",
            button: "ok",
          });
    }
    else if(!email_validation.test(email)){

        // alert("Please enter valid email !") ; 
        swal({
            title: "Invalid Email !",
            text: "please enter valid email",
            icon: "warning",
            button: "ok",
          });
    }
    else{

        open_popup() ; 
    }
}
