const menuEmail = document.querySelector(".navbar-email");
const desktop_menu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shopping_car = document.querySelector(".navbar-shopping-cart");
const details = document.querySelector(".product-detail");
const cradscontainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggledesktopMenu);
burgerMenu.addEventListener("click", toggleburgerMenu);
shopping_car.addEventListener("click", toggleshoppingcar);


function toggledesktopMenu () {
  desktop_menu.classList.toggle("inactive");
}

function toggleburgerMenu () {
  mobileMenu.classList.toggle("inactive");
}

function toggleshoppingcar () {
  details.classList.toggle("inactive")
}

const productList = []
productList.push({
  name: "bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
  productList.push({
    name: "phone",
    price: 1020,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYjHbZLjeYg9kzmz5qeluoT0R33LI4X7VqX8JjVOkQRY7iu_QRpeivq2j1IQUF9CUMrks&usqp=CAU",
  
})
productList.push({
  name: "XBOX",
  price: 510,
  image: "https://falabella.scene7.com/is/image/FalabellaCO/9461744_2?wid=800&hei=800&qlt=70",
})
productList.push({
  name: "Play station",
  price: 410,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNElU5W5JH89GsxXstigqpRfm5FHK5xwNP2cZjNM6duUt4CMwlJ73vplhS_7Hd7NCKr4&usqp=CAU",
})
productList.push({
  name: "nintendo",
  price: 400,
  image: "https://electrodomesticosmedellin.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-26-at-3.31.42-PM.jpeg",
})
productList.push({
  name: "baskerbilles dog",
  price: 20, 
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5GvaLHCdFiCwTdqo15KKP1ggpl0hlfy6SBQ&usqp=CAU",
})
productList.push({
  name: "la aguja gueca",
  price: 15,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkLaLvoINP0CkOkuVrDKHnwwyHqpeSQBplA&usqp=CAU",
})
productList.push({
  name: "printer",
  price:200,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0FmoC05MOUsGk-DV5XgsNOfxVBikWrcLhe-qbBlWMxXufcEub_djb6pRjDIT7jEW-D4&usqp=CAU",
})
productList.push({
  name: "toy",
  price: 20,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrP9H_5ByndSd9EBi7j-gqvMvScWx90UkgGA&usqp=CAU",
})
productList.push({
  name: "car",
  price: 2000000,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbP8hxVs6H_h-3NogbQQ6C6uFh_wpVwpsniQ&usqp=CAU",
})
productList.push({
  name: "shirt",
  price: 20,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSps3GVMdZZuX94kQOG30Zbo-cETpVRofwFKA&usqp=CAUs",
})
productList.push({
  name: "jean",
  price: 20,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-vZSjU6h08EcGTBFnWOmMn6tdXMrREPFROekXShiPqjWL8DUFr4vFBs3uztAUKqaaz8&usqp=CAU",
})
productList.push({
  name: "chess",
  price: 70,
  image: "https://i.ytimg.com/vi/kviwJolA3oM/maxresdefault.jpg",
})

for (product of productList) {
  const productcard = document.createElement('div');
  productcard.classList.add('product-card');

  const img = document.createElement('img');
  img.setAttribute('src', product.image);

  const productinfo = document.createElement('div');
  productinfo.classList.add('product-info');

  const productinfodiv = document.createElement('div');

  const productprice = document.createElement('p');
  productprice.innerText = '$' + product.price;
  const productname = document.createElement('p');
  productname.innerText = product.name;

  const productinfofigure = document.createElement('figure');
  
  productinfodiv.appendChild(productprice);
  productinfodiv.appendChild(productname);

  const productIMGcart = document.createElement('img');
  productIMGcart.setAttribute('src', './icons/bt_add_to_cart.svg');

  productinfofigure.appendChild(productIMGcart);

  productinfo.appendChild(productinfodiv);
  productinfo.appendChild(productinfofigure);

  productcard.appendChild(img);
  productcard.appendChild(productinfo);

  cradscontainer.appendChild(productcard);
}