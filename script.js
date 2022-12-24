const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailAsideIcon = document.querySelector('.product-detail-close-secondary');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const asideSecondary = document.querySelector('.product-detail-secondary');
const cardsContainer = document.querySelector('.cards-container');
const itemsCarrito = document.querySelector('.items-carrito');
const countTotalCarrito = document.querySelector('.count-total-carrito');
let articulosCarrito = [];

eventsListeners();
function eventsListeners(){
    document.addEventListener('click', carritoHTML);
    menuEmail.addEventListener('click', toggleDesktopMenu);
    menuHamIcon.addEventListener('click', toggleMobilepMenu);
    menuCarritoIcon.addEventListener('click', toggleCarritoAside);
    productDetailAsideIcon.addEventListener('click', closeProductDetailAside);
    aside.addEventListener('click', eliminarItem);
}

//Detectar click en la imagen de carrito
function carritoHTML(e){
    if(e.target.classList.contains('agregar-carrito')){
        const itemSeleccionado = e.target.parentElement.parentElement.parentElement;
        leerDatosItem(itemSeleccionado);
    }
}
function eliminarItem(e){
    if(e.target.classList.contains('borrar-item')){
        const articulo = e.target.parentElement;
        if(Number(articulo.children[3].textContent) > 1){
            let articulosMap = articulosCarrito.map(item => {
                if(item.title === articulo.children[1].textContent){
                    item.count = item.count - 1;
                    return item;
                }else{
                    return item;
                }
            });
            articulosCarrito = [...articulosMap];
        }else{
            let items = articulosCarrito.filter(item => {
                return item.title !== articulo.children[1].textContent;
            });
            articulosCarrito = [...items];
        }
        showItemsCarrito();
    }
}
function leerDatosItem(item){
    const objItem = {
        image: item.querySelector('img').src,
        price: item.querySelector('.price').textContent,
        title: item.querySelector('.title').textContent,
        count: 1
    }
    //Revisar si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(item => item.title === objItem.title);

    if(existe){
        //Identificar el elemento duplicado y actualizar el contador
        const items = articulosCarrito.map(item => {
            if(item.title === objItem.title){
                item.count++;
                return item;
            }else{
                return item;
            }
        });
        articulosCarrito = [...items];
    }else{
        //Si no hay items duplicados que se inserte en el array
        articulosCarrito.push(objItem);   
    }
    showItemsCarrito();
}
//Mostrar los productos en HTML
function showItemsCarrito(){
    itemsCarrito.innerHTML = '';
    // <div class="shopping-cart">
    //     <figure>
    //         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    //     </figure>
    //     <p>Bike</p>
    //     <p>$30,00</p>
    //     <p>1</p>
    //     <img src="./icons/icon_close.png" alt="close">
    // </div>
    articulosCarrito.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('shopping-cart');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.setAttribute('src', item.image);
        img.setAttribute('alt', item.title);
        figure.appendChild(img);
        const pTitle = document.createElement('p');
        pTitle.textContent = item.title;
        const pPrice = document.createElement('p');
        pPrice.textContent = item.price;
        const count = document.createElement('p');
        count.textContent = `${item.count}`;
        const icon = document.createElement('img');
        icon.setAttribute('src', './icons/icon_close.png');
        icon.setAttribute('alt', 'close');
        icon.setAttribute('style', 'cursor: pointer;');
        icon.classList.add('borrar-item');
        div.appendChild(figure);
        div.appendChild(pTitle);
        div.appendChild(pPrice);
        div.appendChild(count);
        div.appendChild(icon);

        itemsCarrito.appendChild(div);
    });
    totalCarrito();

}
function totalCarrito(){
    const total = articulosCarrito.reduce((acumulador, item) => {
        return acumulador + (item.count * Number(item.price.slice(1)));
    }, 0);
    countTotalCarrito.textContent = `$${total}`;
}
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    asideSecondary.classList.add('inactive');
}
function toggleMobilepMenu(){
    mobileMenu.classList.toggle('inactive');
    // Al utilizar los métodos .add() o .remove(), en el caso de que se añada una clase CSS que ya existía previamente, o que se elimine una clase CSS que no existía, simplemente no ocurrirá nada.
    aside.classList.add('inactive');
    asideSecondary.classList.add('inactive');
}
function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    // Al utilizar los métodos .add() o .remove(), en el caso de que se añada una clase CSS que ya existía previamente, o que se elimine una clase CSS que no existía, simplemente no ocurrirá nada.
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideSecondary.classList.add('inactive');
}
function openProductDetailAside(product){
    asideSecondary.classList.remove('inactive');
    const productImg = document.querySelector('.product-img-secondary');
    const productPrice = document.querySelector('.product-price-secondary');
    const productName = document.querySelector('.product-name-secondary');
    productImg.setAttribute('src', product.image);
    productPrice.textContent = `$${product.price}`;
    productName.textContent = `${product.name}`;
}
function openProductCartAside(product){
    console.log(product)
}
function closeProductDetailAside(){
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideSecondary.classList.add('inactive');
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
    let i = 0;
    //Con el loop 'for of' no se podría ya que al finalizar la construcción de elementos estaría usando el último valor como argumento de la función, forEach recorre cada elemento de cada arreglo extrayendo los datos que desee de cada uno sin ningun problema 
    arr.forEach(product => {
        //Creamos elementos
        //Aquí creamos un elemento div y lo guardamos en una variable llamada 'productCard'
        const productCard = document.createElement('div');
        //Accedemos al objeto classList y agregamos una clase llamada 'product-card'
        productCard.classList.add('product-card');
        //Creamos un elemento img y lo almacenamos en 'img'
        const productImg = document.createElement('img');
        //Modificamos su atributo 'src' y le asignamos el link de la imagen
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', () => {
            openProductDetailAside(product);
        });
        productImg.style.cursor = 'pointer';
        //Creamos un elemento div y lo almacenamos en 'productInfo'
        const productInfo = document.createElement('div');
        //Accedemos al objeto classList y agregamos una clase llamada 'product-info'
        productInfo.classList.add('product-info');

        //Creamos un elemento div y lo almacenamos en la variable 'productInfoDiv'
        const productInfoDiv = document.createElement('div');
        //Creamos un elemento párrafo
        const productPrice = document.createElement('p');
        productPrice.textContent = '$' + product.price; 
        productPrice.classList.add('price');
        //Creamos otro elemento de tipo párrafo
        const productName = document.createElement('p');
        productName.classList.add('title');
        productName.textContent = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        //Creamos un elemento de tipo figure y lo almacenamos en una variable
        const productInfoFigure = document.createElement('figure');
        //Creamos un elemento de tipo imagen y lo almacenamos en la variable card
        const card = document.createElement('img');
        //Modificamos su atributo src y le asignamos el link de ese icon
        card.setAttribute('src', './icons/bt_add_to_cart.svg');
        //Agregamos clase a card
        card.classList.add('agregar-carrito');

        //Agregamos tipo de cursor a card
        card.style.cursor = 'pointer';

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
    });
}
renderProducts(productList);
