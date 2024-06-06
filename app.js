
const User = JSON.parse(localStorage.getItem('RegUser'));
console.log(User);
const Form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

Form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    const validation = User.find((human)=>{
 return human.email === email.value && human.password === password.value;
    })

    if(!validation){
        alert("Enter Correct Email & Password...!")
        return;
    }
    window.location = "main.html"
})