'use strict'
var gProducts = [];
var gNextId = 100;
var shirts = []


function _getNewId() {

    return gNextId++;
}


function createProducts() {
    createProduct(prod1.title, prod1.description, prod1.price, prod1.dataId, prod1.imgUrl)
    createProduct(prod2.title, prod2.description, prod2.price, prod2.dataId, prod2.imgUrl)
    createProduct(prod3.title, prod3.description, prod3.price, prod3.dataId, prod3.imgUrl)
    createProduct(prod4.title, prod4.description, prod4.price, prod4.dataId, prod4.imgUrl)
}

function createProduct(title, description, price, dataId, imgUrl) {
    var prod = {
        title: title,
        description: description,
        price: price,
        dataId: dataId,
        imgUrl: imgUrl,
    }
    gProducts.push(prod);
}



function showProduct(dataId) {
    var prodIdx = findProdIdx(dataId);
    var product = gProducts[prodIdx];
    return product;
}


function findProdIdx(dataId) {
    var prodIdx = gProducts.findIndex((prod) => {
        return prod.dataId === dataId
    })
    return prodIdx;
}



var prod1 = {
    title: `Star Wars The Mandalorian Boy's The Child Cartoon Shy T-Shirt`,
    description: `Is that a Baby Yoda? It couldn't be because this little nugget of cuteness was born after the Battle of Yavin and Yoda was born almost 900 years before that! But the similarity sure is striking isn't it? You'll be the envy of the
    galaxy in this Star Wars The Mandalorian The Child Cartoon Shy Boys' Tee.`,
    price: 19.99,
    dataId: _getNewId(),
    imgUrl: './img/shirts/shirt4.png',
}

var prod2 = {
    title: `Men's - Epic Darth Vader`,
    description: `The dark side of the Force is almost as alluring as the Star Wars Epic Darth Vader Black T-Shirt! This epic Star Wars shirt shows Darth Vader holding his infamous red lightsaber, printed in a fun glowing style. 100% Cotton.`,
    price: 19.99,
    dataId: _getNewId(),
    imgUrl: './img/shirts/shirt1.png',
}

var prod3 = {
    title: `Men's - Darth Vader King of Spades`,
    description: `The classic playing card gets an Empire-themed makeover to bring you the Star Wars Vader King of Spades Black T-Shirt. Darth Vader takes the role of king on this unique Star Wars t-shirt, with his famous red lightsaber in hand.
    100% Cotton.`,
    price: 19.99,
    dataId: _getNewId(),
    imgUrl: './img/shirts/shirt2.png',
}

var prod4 = {
    title: `Mens - Star Wars The Mandalorian Group Shot This Is The Way`,
    description: `When your Mandalorian armor is at the cleaners, give the Star Wars The Mandalorian Group Shot This Is The Way Men's Tee a try instead! Take up the reins as a Mandalorian gunfighter exploring the galaxy with this awesome Star Wars
    tee that celebrates the upcoming Star Wars-inspired television series, The Mandalorian.`,
    price: 19.99,
    dataId: _getNewId(),
    imgUrl: './img/shirts/shirt3.png',
}