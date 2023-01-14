async function getResponse() {
    let response = await fetch('https://dummyjson.com/products') 
    let jsonList = await response.json()
    let list = document.querySelector('.products')
    let key
    let elements = jsonList.products

    let countOfElements = document.getElementById('countId')
    elements = elements.splice(0, countOfElements.value)

    document.querySelectorAll('.count .plus').forEach(item => {
        item.addEventListener('click', function () {
            ++item.parentElement.querySelector('input').value;
            if (item.parentElement.querySelector('input').value > 1) {
                item.parentElement.querySelector('.minus').classList.remove('min');
            }
        });
    });
    document.querySelectorAll('.count .minus').forEach(item => {
        item.addEventListener('click', function () {
            --item.parentElement.querySelector('input').value;
            if (item.parentElement.querySelector('input').value < 2) {
                item.parentElement.querySelector('input').value = 1
                item.classList.add('min');
            }
        });
    });

    for (key in elements) {
        console.log(elements[key])
        list.innerHTML += 
        `<li class="item">
            <h5 class="small_panel">${elements[key].title}</h5>
                <div class="full_panel">
                    <img src="${elements[key].thumbnail}" alt="${elements[key].description}"></img>
                    <p>brand: ${elements[key].brand}</p>
                    <p>category: ${elements[key].category}</p>
                    <p>${elements[key].description}</p>
                    <p>discount percentage: ${elements[key].discountPercentage} %</p>
                    <p>price: ${elements[key].price} usd</p>
                    <p>rating: ${elements[key].rating}</p>
                    <p>stock: ${elements[key].stock}</p>
            </div>
        </li>`
    }
}

getResponse()



