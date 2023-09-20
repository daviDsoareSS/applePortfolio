const buttonChangeColorBody = document.querySelector('.button-floating')
const body = document.querySelector('body')
let isButtonActive = false;

buttonChangeColorBody.addEventListener('click', function(){
  body.classList.toggle('dark');
  if(isButtonActive){
    buttonChangeColorBody.innerHTML = "<i class='fa-regular fa-moon'></i>";
    buttonChangeColorBody.style.backgroundColor = 'black';
    
    isButtonActive = false;

  }else{
    buttonChangeColorBody.innerHTML = "<i class='fa-regular fa-sun' style='color: black;'></i>";
    buttonChangeColorBody.style.backgroundColor = 'white';
    isButtonActive = true;

  }
})