const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  if (Number(validationInput.dataset.length) === event.currentTarget.value.length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
    console.log(validationInput);
     }
     else{
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
    console.log(validationInput);
     };
    
  });