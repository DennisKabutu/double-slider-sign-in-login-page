//grab the sign up button,sign in button and container

const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.getElementById('container');


signInButton.addEventListener('click',()=>{
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click',()=>{
    container.classList.remove('right-panel-active');    
});

