
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');

let indicadores = document.querySelector('.indicadores');

let detalheSetas = indicadores.querySelectorAll('ul li');

let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;


nextButton.addEventListener('click', () => {

    list.style.setProperty('--calculo', 1);

    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add('active');

    let detalhe = indicadores.querySelector('ul li.active');
    detalhe.classList.remove('active');
    detalheSetas[active].classList.add('active');

    indicadores.querySelector('.number').innerHTML = "0" + (active + 1);
    
    
    });

 prevButton.addEventListener('click', () => {

    list.style.setProperty('--calculo', -1);

    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active');

    let detalhe = indicadores.querySelector('ul li.active');
    detalhe.classList.remove('active');
    detalheSetas[active].classList.add('active');

    indicadores.querySelector('.number').innerHTML = "0" + (active + 1);
  
        
    });

