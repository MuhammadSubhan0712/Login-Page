
const form =  document.querySelector('form');
const fname = document.querySelector('#F-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


Form.addEventListener('submit', (event)=>{

    event.preventDefault();
    let RegisterUser;
    let items = JSON.parse(localStorage.getItem('RegUser'));
   if(items === null)
    {
        RegisterUser = [];
    }
    else{
        RegisterUser = items;
    }
     const check = RegisterUser.find((user)=>{
       return user.email === email.value;
     });

     if(check)
        {
            alert('Email Already Exists..!');
            return;
        }


     NewUser = {
        email: email.value,
        password: password.value
    }
    RegisterUser.push(NewUser);
    localStorage.setItem('RegUser', JSON.stringify(RegisterUser));

    alert('Registration successful!');
    Form.reset();

    window.location = "index.html";
})