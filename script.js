const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleMobilepMenu(){
    mobileMenu.classList.toggle('inactive');
    // Al utilizar los métodos .add() o .remove(), en el caso de que se añada una clase CSS que ya existía previamente, o que se elimine una clase CSS que no existía, simplemente no ocurrirá nada.
    aside.classList.add('inactive');
}
function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    // Al utilizar los métodos .add() o .remove(), en el caso de que se añada una clase CSS que ya existía previamente, o que se elimine una clase CSS que no existía, simplemente no ocurrirá nada.
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

const  productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});
productList.push({
    name: 'My Beautiful Dark Twisted Fantasy - Vinilo',
    price: 1200,
    image: 'https://m.media-amazon.com/images/I/713N4ZIYsEL._SX425_.jpg' 
});
productList.push({
    name: 'Fight Club PlayStation 2',
    price: 800,
    image: 'https://m.media-amazon.com/images/I/41HE6FAZXSL._AC_.jpg' 
});
productList.push({
    name: 'Travis Bickle Taxi Driver',
    price: 200,
    image: 'https://http2.mlstatic.com/D_NQ_NP_959800-MLM42258083541_062020-O.webp'
});
productList.push({
    name: 'Cinturón SBD',
    price: 250,
    image: 'https://www.powerhispaniaed.com/images/stories/virtuemart/product/resized/cinturon-sbd-2021-1_x400.jpg'
});

/* 
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> 
*/

function renderProducts(arr){
    for(product of arr){
        //Creamos elementos
    
        //Aquí creamos un elemento div y lo guardamos en una variable llamada 'productCard'
        const productCard = document.createElement('div');
        //Accedemos al objeto classList y agregamos una clase llamada 'product-card'
        productCard.classList.add('product-card');
    
        //Creamos un elemento img y lo almacenamos en 'img'
        const productImg = document.createElement('img');
        //Modificamos su atributo 'src' y le asignamos el link de la imagen
        productImg.setAttribute('src', product.image);
    
        //Creamos un elemento div y lo almacenamos en 'productInfo'
        const productInfo = document.createElement('div');
        //Accedemos al objeto classList y agregamos una clase llamada 'product-info'
        productInfo.classList.add('product-info');
    
        //Creamos un elemento div y lo almacenamos en la variable 'productInfoDiv'
        const productInfoDiv = document.createElement('div');
        //Creamos un elemento párrafo
        const productPrice = document.createElement('p');
        productPrice.textContent = '$' + product.price; 
        //Creamos otro elemento de tipo párrafo
        const productName = document.createElement('p');
        productName.textContent = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        //Creamos un elemento de tipo figure y lo almacenamos en una variable
        const productInfoFigure = document.createElement('figure');
        //Creamos un elemento de tipo imagen y lo almacenamos en la variable card
        const card = document.createElement('img');
        //Modificamos su atributo src y le asignamos el link de ese icon
        card.setAttribute('src', './icons/bt_add_to_cart.svg');
        //Agregamos el elemento imagen como hijo al elemento figure
        productInfoFigure.appendChild(card);
    
        //Agregamos un hijo al div productoInfo
        productInfo.appendChild(productInfoDiv);
        //Inserta un elemento hijo al final de productInfoDiv
        productInfo.appendChild(productInfoFigure);
    
        //Insertamos un elemento hijo a productCard
        productCard.appendChild(productImg);
        //Insertamos un elemento hijo al final de productImg
        productCard.appendChild(productInfo);
    
        //AHORA SÍ, INSERTAMOS LO QUE HEMOS CREADO A UNA PARTE ESPECÍFICA DEL CÓDIGO HTML
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);