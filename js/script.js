//Função para mostrar uma caixa de diálogo na página
//alert('Olá!');

//var, let, const
//selecionando o item a ser manipulado (btn-menu e menu)
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);

//https://developer.mozilla.org/pt-BR/docs/Web/Events
//Associar o evento de click ao btnMenu

btnMenu.addEventListener('click', function () {

    //console.log(menu);
    //menu.classList.add('menu-open');
    //menu.classList.remove('menu-open');
    menu.classList.toggle('menu-open'); //add ou remove a classe
    btnMenu.classList.toggle('x');
})

