'use strict'

function onInit() {
    createProducts();
    renderProducts();
}






function onShowProduct(prodId) {
    var product = showProduct(prodId);
    console.log(product.title);
    document.querySelector('.modal-title').innerHTML = product.title;
    document.querySelector('.modal-img').src = product.imgUrl;
    document.querySelector('.modal-p').innerHTML = product.description;
    document.querySelector('.modal-price').innerHTML = `${product.price}$`;
}


function renderProducts() {
    gProducts.forEach(prod => {
        renderShopProduct(prod.title, prod.description, prod.price, prod.dataId, prod.imgUrl);
    });
}


function renderShopProduct(title, description, price, dataId, imgUrl) {
    var strHtml = `                
    <div class="card product" style="width: 18rem;">
    <img src="${imgUrl}" class="card-img-top">
    <div class="card-body">
    <a href="#" onclick="onShowProduct(${dataId})"><h5 class="card-title">${title}</h5></a>
        <p class="card-text">${description} </p>
        <h3>${price}$</h3>
        <a href="#" class="btn btn-primary" onclick="onShowProduct(${dataId})" data-toggle="modal" data-target="#exampleModal">BUY NOW!</a>
    </div>
</div>
`;
    return document.querySelector('.shop-body').innerHTML += strHtml;
}