
const form =  document.querySelector('form');
const fname = document.querySelector('#F-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
 

let User = [];

form.addEventListener('submit', (event)=>{
event.preventDefault();

if (User.filter((items)=>{
    return items.email === email.value;
})) {
    alert('!!!You have Already Registered!!!');
}
else{
    User = {
        fname: fname.value,
        email: email.value,
        password:password.value
        }
}

})

console.log(User);

