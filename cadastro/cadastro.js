const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#senha');

form.addEventListener("submit", (event) =>{

  event.preventDefault();


 // Verifica se o nome está vazio

 if(nameInput.value === "") {
  alert("Por favor , preencha o seu nome")
  return;
 }

 // Verificar se o e-mail esta preenchido e se é valido

 if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
  alert("Por favor , preencha o seu email")
  return;
 }

 // Verificar se a senha está preenchida

 if(!validatePassword(passwordInput.value, 8)) {
  alert("A Senha precisa ser no mínimo obter 8 dígitos")
  return;
 }
 // Se todos os campos estiverem corretamente preenchidos, evie o form

 form.submit()
});

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