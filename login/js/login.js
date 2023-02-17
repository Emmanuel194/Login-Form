const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#senha');

form.addEventListener("submit", (event) =>{

  event.preventDefault();

  
  // Verificar se o e-mail esta preenchido e se é valido

 if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
  swal({
    title: "Ops!",
    text: "Por favor , preencha o seu email",
    icon: "info",
  });
  return;
  }

  // Verificar se a senha está preenchida

 if(!validatePassword(passwordInput.value, 8)) {
  swal({
    title: "Ola.",
    text: "A Senha precisa ser no mínimo obter 8 dígitos",
    icon: "info",
  });
  return;
 }

 // Se todos os campos estiverem corretamente preenchidos, evie o form

 form.submit()

})



// Função que valida e-mail

function isEmailValid(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if(emailRegex.test(email)) {
    return true;
  }
  return false;
}

// Função que valida a senha

function validatePassword(password, minDigits) {
  if(password.length >= minDigits) {
    // Senha Válida
    return true;
  }
   //Senha Inválida
  return false;
}