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

const token = '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'; // Substitua com seu token pessoal
const gridCardsRepos = document.querySelector('.grid-projects');

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    // Aqui você pode trabalhar com os dados dos repositórios
    console.log(data);

    data.forEach(element => {
      let card = document.createElement('div');
      card.className = 'card-project';
      
      if(element.language == 'JavaScript'){
        let cardHTML = 
        `<p>${element.id}</p>` +
        `<small>${element.name}</small>` +
        `<p>${element.language}</p>`;

        card.innerHTML = cardHTML;
        
        gridCardsRepos.appendChild(card);
                       
      }
      
    });
  })
  .catch((error) => console.error('Erro:', error));
