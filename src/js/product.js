class Product {
    constructor(name, price, image, date, category, rating) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.date = date;
        this.category = category;
        this.rating = rating;
    }
}

const PRODUCTS = [
    new Product(
        "Asus ZenFone Go ZB452KG", 384.4, "img/235x120/shop_img_1.png", new Date(2017, 0, 1), "Recommend", 4.1
    ),
    new Product(
        "Xiaomi Mi Band 2", 384.4, "img/235x120/shop_img_2.png", new Date(2017, 2, 26), "Bestseller", 4.7
    ),
    new Product(
        "LG 43UH610V", 384.4, "img/235x120/shop_img_3.png", new Date(2017, 8, 15), "Goods of the week", 4.2
    ),
    new Product(
        " Apple iMac 27 Retina 5K", 384.4, "img/235x120/shop_img_4.png", new Date(2017, 1, 12), "Recommend", 4.5
    ),
    new Product(
        "Asus ZenFone Go ZB452KG ", 384.4, "img/235x120/shop_img_5.png", new Date(2017, 7, 24), "New product", 3.7
    ),
    new Product(
        "Electrolux EZB 52410 AK", 384.4, "img/235x120/shop_img_6.png", new Date(2017, 10, 9), "Recommend", 3.2
    ),
    new Product(
        "Beats studio wireless", 384.4, "img/235x120/shop_img_7.png", new Date(2017, 11, 3), "Bestseller", 4.8
    ),
    new Product(
        "Nikon D3300 Kit", 384.4, "img/235x120/shop_img_8.png", new Date(2017, 7, 18), "Recommend", 5
    ),
];

/**
 * Сортировка списка продуктов по популярности
 * @param {Product[]} products Список продуктов
 */
function sortProductsByPopularity(products) {
    return products.sort((a, b) => a.rating > b.rating);
}

/**
 * Сортировка списка продуктов по дате
 * @param {Product[]} products Список продуктов
 */
function sortProductsByDate(products) {
    return products.sort((a, b) => a.date > b.date);
}

/**
 * Очистка списка продуктов
 */
function clearProducts() {
    const productContainer = document.querySelector(".products");

    productContainer.innerHTML = "";
}

/**
 * Создание DOM-элементов для списка продуктов
 * @param {Product[]} products Список продуктов
 */
function drawProducts(products) {
    const productContainer = document.querySelector(".products");

    for (let product of products) {
        let card = document.createElement("div");
        card.classList.add("card");

        let header = document.createElement("div");
        header.classList.add("card-head");
        header.innerText = product.category;

        let body = document.createElement("div");
        body.classList.add("card-body");

        let image = document.createElement("img");
        image.classList.add("card-img");
        image.src = product.image;

        let span = document.createElement("span");
        span.classList.add("card-title");
        span.innerText = product.name;

        let footer = document.createElement("div");
        footer.classList.add("card-footer");
        footer.innerText = `$ ${product.price}`;

        body.appendChild(image);
        body.appendChild(span);

        card.appendChild(header);
        card.appendChild(body);
        card.appendChild(footer);

        productContainer.appendChild(card);
    }
}

function setPopular(){
    clearProducts();
    let sortedProducts = sortProductsByPopularity(PRODUCTS);
    drawProducts(sortedProducts);
}

function setNew(){
    clearProducts();
    let sortedProducts = sortProductsByDate(PRODUCTS);
    drawProducts(sortedProducts);
}

let activeCategory = "";

function setCategoryValue(){
    let categorySelect = document.querySelector("#categorySelect");
    const selectedOption = categorySelect.options[categorySelect.selectedIndex];
    activeCategory = selectedOption.value;

    clearProducts();
    let filteredProducts = filterProductsByCategory(PRODUCTS,activeCategory);
    drawProducts(filteredProducts);
}

/**
 * Фильтрует список продуктов по выбранной категории
 * @param {Product[]} products Список продуктов
 * @param {string} category Категория
 */
function filterProductsByCategory(products, category){
    return products.filter((product)=>product.category===category)
}


window.addEventListener("load", () => {
    drawProducts(PRODUCTS);
});

window.addEventListener("load", () => {
    let categorySelect = document.querySelector("#categorySelect");
    categorySelect.addEventListener("change", setCategoryValue);
});