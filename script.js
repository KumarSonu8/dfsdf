const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("password2");

btn.addEventListener('click',e => {
    e.preventDefault();
    checkInputs();
})



function checkInputs(){
    userNameValue = document.getElementById("userName").value.trim();
    emailValue = document.getElementById("email").value.trim();
    passwordValue = document.getElementById("password").value.trim();
    cnfPasswordValue = document.getElementById("password2").value.trim();
    
    if(userNameValue === ""){
        setError(userName,"User Name can't be empty"); //escape sequence
    }
    else{
        setSucess(userName);
    }
    
    if(emailValue === ""){
        setError(email,"Email can't be empty"); 
    }
    else{
        setSucess(email);
    }

    if(passwordValue === ""){
        setError(password,"Password can't be empty"); 
    }
    else{
        setSucess(password);
    }

    if(cnfPasswordValue === ""){
        setError(cnfPassword,"Confirm your password"); 
    }
    else if(cnfPasswordValue !== passwordValue){
        setError(cnfPassword,"Password doesn't match");
    }
    else{
        setSucess(cnfPassword);
    }
}

function setError(input,err){
    let formContent = input.parentElement;
    let error = formContent.querySelector("span");
    formContent.className = 'formContent error';
    error.innerHTML = err;
}

function setSucess(input){
    let formContent = input.parentElement;
    formContent.className = 'formContent sucess';
}