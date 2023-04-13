const botaoMais = document.querySelector('.mais');
const botaoMenos = document.querySelector('.menos');
let numero = document.querySelector('.numero');
const adicionarAoCarrinho = document.getElementById('add-to-cart');
const cartCountElement = document.getElementById('cart-count');
const carrinho = document.querySelector('.carrinho');
const compras = document.querySelector('.compras');
const aparecerCompras = document.querySelector('.sobre-none');
const carrinhoVazio = document.querySelector('.vazio');
const multiplicador = document.querySelector('.multiplicador');
const resultado = document.querySelector('.resultado');

let valorNumero = 0;

botaoMais.addEventListener("click", function(){
    valorNumero += 1;

    numero.textContent = valorNumero;
});

botaoMenos.addEventListener("click", function(){
    if(valorNumero > 0){
        valorNumero -= 1;

        numero.textContent = valorNumero;
    }
});

let contador = 0;

adicionarAoCarrinho.addEventListener('click', (event) => {
    const quantidade = parseInt(numero.textContent);
    contador += quantidade;
    cartCountElement.textContent = contador;
    cartCountElement.style.display = 'block';
    valorNumero = 0;
    numero.textContent = valorNumero;
  });

  function slider(anything){
    document.querySelector('.imagemprincipal').src = anything;
};

carrinho.addEventListener('click', (event) =>{
    if((parseInt(cartCountElement.textContent) > 0 )){
        aparecerCompras.style.display = 'block';
        carrinhoVazio.style.display = 'none'
        multiplicador.textContent =  cartCountElement.textContent
        resultado.textContent = multiplicador.textContent * 125
    }
    compras.classList.toggle('block');
});


