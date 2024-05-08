const scriptURL = 'https://script.google.com/macros/s/AKfycbzOpU46iWyGTNaqqpKuu6faDA0Cdq4sZJxJ2bvbsSvyfgN4Kzg9MQLkXAMQsgCO6rA/exec'
        const form = document.forms['knit_data']

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


    if(number =="" || text == "" || email == ""){
        alert("enter complete information ")  ;
        return false ; 
    }
    else if(number.length < 10 || number.length > 10){

        alert("Number should be of 10 digit ! Please enter valid number. ") ; 
    }
    else if(isNaN(number)){

        alert("Only number are allowed ! Please enter valid number. ");
    }
    
    else{

        open_popup() ; 
    }
}
