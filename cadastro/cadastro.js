const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const username = document.querySelectorAll('.username');
const email = document.querySelectorAll('.email');
const senha = document.querySelectorAll('.senha');
var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function setError(cadastro){
  campos(cadastro).style.border = '1px solid #e63636';
}

function nameValidate(){
  if(campos[0].value.length < 3)
  {
    setError(0);
  }
  else
  {
    console.log('Nome validado');
  }
}