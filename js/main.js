let arrShop = [
  {
    ids: 1,
    name: "Pepperoni",
    price: 2.23,
    imgurl: "img/1.jpg"
  },

  {
    ids: 2,
    name: "Cheesy",
    price: 5.99,
    imgurl: "img/2.jpg"
  },

  {
    ids: 3,
    name: "Margarita",
    price: 7.48,
    imgurl: "img/3.jpg"
  },

  {
    ids: 4,
    name: "Hawaiian",
    price: 9.32,
    imgurl: "img/4.jpg"
  }
]

const elList = document.getElementById('shopbarlist');


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
                    <button class="shop__btn" type="button" onclick='addItem(${arrShop[i].ids})'>Add to Cart</button>
                  </div>
                </div>
    `
      elList.appendChild(li);
}


// //yangi arrayga qo'shib borish

const elListCart = document.getElementById('cartlist')
const elSub = document.querySelector('.shop__sbtotal');
const elTax = document.querySelector('.shop__stax');
const elTotal = document.querySelector('.shop__stotal');

let sub = 0;
let tex = 0;
let total = 0;

let arrShopNew = [];
let arrPrice = [];

function addItem(id) {
  for (let i = 0; i < arrShop.length; i++) {
    if (id == arrShop[i].ids) {
      arrShopNew.push(arrShop[i]);
    }
  }

  for(let j = 0; j < arrShopNew.length; j++) {
    if(j == arrShopNew.length - 1) {
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
                            <button class="shop__delbtn" type="button" onclick='delItem(${j})'><i class='bx bxs-minus-circle'></i></button>
                            <span class ="shop__plus"> 0 </span>
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
  }
}


// /o'chirish qismi

function delItem(index) {
  let newArrDel = [];
  for(let i = 0; i < arrShopNew.length; i++) {
    if (index != i) {
      newArrDel.push(arrShopNew[i]);
    }
  }

  arrShopNew = newArrDel;

  elListCart.innerHTML = '';
  sub = 0;
  tex = 0;
  total = 0;

  for(let j = 0; arrShopNew.length; j++) {
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
                          <button class="shop__delbtn" type="button" onclick='delItem(${j})'><i class='bx bxs-minus-circle'></i></button>
                          <span class ="shop__plus"> 0 </span>
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














// const elList = document.getElementById('shopbarlist');


// // qo'shib borish qismi
// for(let i = 0; i < arrShop.length; i++) {
//   let li = document.createElement('li');
//   li.className = "shop__item";
//   li.innerHTML = `
//   <div class="shop__box">
//                 <div class="shop__imgboxs">
//                   <div class="shop__imgbox">
//                     <img class="shop__img" src="${arrShop[i].imgurl}" alt="pizza">
//                   </div>
//               </div>
//               <div class="shop__main">
//                   <h2 class="shop__title">${arrShop[i].name}</h2>
//                   <p class="shop__price">$${arrShop[i].price}</p>
//                   <button class="shop__btn" type="button" id="${arrShop[i].id}">Add to Cart</button>
//                 </div>
//               </div>
//   `
//     elList.appendChild(li);
// }


// //yangi arrayga qo'shib borish


// let arrShopNew = [];
// let arrPrice = [];
// const elBtnAdd = document.querySelectorAll('.shop__btn');
// const elListCart = document.getElementById('cartlist')
// const elSub = document.querySelector('.shop__sbtotal');
// const elTax = document.querySelector('.shop__stax');
// const elTotal = document.querySelector('.shop__stotal');

// let sub = 0;
// let tex = 0;
// let total = 0;


// for(let i = 0; i < elBtnAdd.length; i++) {
//   elBtnAdd[i].addEventListener('click', ()=> {
//     arrShopNew[arrShopNew.length] = arrShop[i];
//     arrPrice[arrPrice.length] = arrShop[i].price;

//     sub += arrPrice[i];
//     tax = sub * 10 / 100;
//     total = (sub + tax);

//     let li = document.createElement('li');
//     li.className = "shop__item";
//     li.innerHTML = `
//                     <div class="shop__box">
//                       <div class="shop__imgboxs">
//                         <div class="shop__imgbox">
//                           <img class="shop__img" src="${arrShopNew[i].imgurl}" alt="pizza">
//                         </div>
//                       </div>
//                           <div class="shop__main">
//                             <h2 class="shop__title">${arrShopNew[i].name}</h2>
//                             <p class="shop__price">$${arrShopNew[i].price}</p>
//                             <button class="shop__delbtn" type="button" id="del-${arrShopNew[i].id}"><i class='bx bxs-minus-circle'></i></button>
//                             <span class ="shop__plus"> 0 </span>
//                           </div>
//                     </div>
//                 `;
//     elSub.textContent = sub.toFixed(2);
//     elTax.textContent = tax.toFixed(2);
//     elTotal.textContent = total.toFixed(2);

//     elListCart.appendChild(li);

//     const elBtnDel = document.querySelectorAll('.shop__delbtn');

//     for(let i = 0; i < elBtnDel.length; i++) {
//       elBtnDel[i].addEventListener('click', (element) => {
//         element.target.parentNode.parentNode.parentNode.parentNode.remove(li);
//         sub = sub - arrShopNew[i].price;
//         tax = sub * 10 / 100;
//         total = (sub + tax);
//         elSub.textContent = sub.toFixed(2);
//         elTax.textContent = tax.toFixed(2);
//         elTotal.textContent = total.toFixed(2);
//       });
//     }
//   });
// }
