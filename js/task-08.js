const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', onLoginForm);

function onLoginForm(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password,
    };

    if (email === '' || password === '') {
        alert ('Please fill in all the fields!')
    } else {
        console.log(formData);
        event.currentTarget.reset();
    };

    
};


