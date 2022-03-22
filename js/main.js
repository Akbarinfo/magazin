const elList = document.getElementById('shopbarlist');
const elListCart = document.getElementById('cartlist')
const elSub = document.querySelector('.shop__sbtotal');
const elTax = document.querySelector('.shop__stax');
const elTotal = document.querySelector('.shop__stotal');

let sub = 0;
let tex = 0;
let total = 0;

let arrShopNew = [];
let arrPrice = [];

let arrShop = [
  {
    id: 1,
    name: "Pepperoni",
    price: 2.23,
    imgurl: "img/1.jpg",
    count: 0
  },

  {
    id: 2,
    name: "Cheesy",
    price: 5.99,
    imgurl: "img/2.jpg",
    count: 0
  },

  {
    id: 3,
    name: "Margarita",
    price: 7.48,
    imgurl: "img/3.jpg",
    count: 0
  },

  {
    id: 4,
    name: "Hawaiian",
    price: 9.32,
    imgurl: "img/4.jpg",
    count: 0
  }
]


window.addEventListener('load', () => {
  for(let i = 0; i < arrShop.length; i++) {

    let li = document.createElement('li');

    li.className = "shop__item";
      li.innerHTML = `
      <div class="shop__box">
                    <div class="shop__imgboxs">
                      <div class="shop__imgbox">
                        <img class="shop__img" src="${arrShop[i].imgurl}" alt="pizza">
                      </div>
                  </div>
                  <div class="shop__main">
                      <h2 class="shop__title">${arrShop[i].name}</h2>
                      <p class="shop__price">$${arrShop[i].price}</p>
                      <button class="shop__btn" type="button" onclick='addItem(${arrShop[i].id})'>Add to Cart</button>
                    </div>
                  </div>
      `
        elList.appendChild(li);
  }
})


// yangi arrayga qo'shib borish

function addItem(ids) {
  elListCart.innerHTML = null

  let neededOrder = arrShop.find( el => el.id == ids)
  let orderNewArr = arrShopNew.find( el => el.id == ids)

  if(orderNewArr)  {
    orderNewArr.count += 1
    sub += orderNewArr.price;

  } else {
    neededOrder.count += 1
    sub += neededOrder.price;
    arrShopNew.push(neededOrder)
  }

  tax = sub * 10 / 100;
  total = (sub + tax);

  for(let j = 0; j < arrShopNew.length; j++) {
      let elli = document.createElement('li');
      elli.className = "shop__item"
      elli.innerHTML = `
                    <div class="shop__box">
                      <div class="shop__imgboxs">
                        <div class="shop__imgbox">
                          <img class="shop__img" src="${arrShopNew[j].imgurl}" alt="pizza">
                        </div>
                      </div>
                          <div class="shop__main">
                            <h2 class="shop__title">${arrShopNew[j].name}</h2>
                            <p class="shop__price">$${arrShopNew[j].price}</p>
                            <button class="shop__delbtn" type="button" onclick='delItem(${arrShopNew[j].id})'><i class='bx bxs-minus-circle'></i></button>
                            <span class="shop__count"> ${arrShopNew[j].count} </span>
                            <button class="shop__plus" type="button" onclick='addItem(${arrShop[j].id})'><i class='bx bxs-plus-circle'></i></button>
                          </div>
                    </div>
                `;
      elSub.textContent = sub.toFixed(2);
      elTax.textContent = tax.toFixed(2);
      elTotal.textContent = total.toFixed(2);
      elListCart.appendChild(elli)
  }
}


// /o'chirish qismi
function delItem(id) {
  elListCart.innerHTML = null

  sub = 0;
  tex = 0;
  total = 0;

  let mustDelItem = arrShopNew.find( el => el.id == id)
  mustDelItem.count -= 1

  if(mustDelItem.count == 0) {
    arrShopNew = arrShopNew.filter( el => el.id != id)
  }

  for(let j = 0; j < arrShopNew.length; j++) {
    let elli = document.createElement('li');
    elli.className = "shop__item"
    elli.innerHTML = `
                  <div class="shop__box">
                    <div class="shop__imgboxs">
                      <div class="shop__imgbox">
                        <img class="shop__img" src="${arrShopNew[j].imgurl}" alt="pizza">
                      </div>
                    </div>
                        <div class="shop__main">
                          <h2 class="shop__title">${arrShopNew[j].name}</h2>
                          <p class="shop__price">$${arrShopNew[j].price}</p>
                          <button class="shop__delbtn" type="button" onclick='delItem(${arrShopNew[j].id})'><i class='bx bxs-minus-circle'></i></button>
                          <span class="shop__count"> ${arrShopNew[j].count} </span>
                          <button class="shop__plus" type="button" onclick='addItem(${arrShop[j].id})'><i class='bx bxs-plus-circle'></i></button>
                        </div>
                  </div>
              `;

    sub += arrShopNew[j].price;
    tax = sub * 10 / 100;
    total = (sub + tax);


    elSub.textContent = sub.toFixed(2);
    elTax.textContent = tax.toFixed(2);
    elTotal.textContent = total.toFixed(2);
    elListCart.appendChild(elli)
  }

  if (arrShopNew.length == 0 ) {
    sub == 0;
    elSub.textContent = sub.toFixed(2);
    total == 0;
    elTotal.textContent = total.toFixed(2);
    tex == 0;
    elTax.textContent = tex.toFixed(2);
  }
}

