let alldeals = document.querySelector("#alldeals");
let mealType = document.querySelector("#mealType");
let foodType = document.querySelector("#foodType");
let navofindexmobile = document.getElementById("navofindexmobile");
let menuicon = document.getElementById("menu-icon");
let footer = document.getElementsByTagName("footer")[0];

let numberofimgs = 18;

menuicon.addEventListener("click", () => {
    navofindexmobile.classList.toggle("displaynone");
    navofindexmobile.classList.toggle("displayflex");
});


/*===========================================
        CREATE CARD
===========================================*/

function createMenuCard(imageUrl, title) {

    const randomprice = Math.floor(Math.random() * 41) + 10;


    let card = document.createElement("div");
    card.className = "menu-card";

    card.innerHTML = `

        <div class="menu-card-image-wrapper">

            <img src="${imageUrl}"
                 alt="${title}"
                 class="menu-card-image">

         

        </div>

        <div class="menu-card-content">

            <div class="menu-card-top">

             

                <span class="menu-category">
                    ${title}
                </span>

            </div>

            <h3 class="menu-card-title">
                ${title}
            </h3>

            <p class="menu-card-description">

                Freshly prepared with premium ingredients,
                crafted by our experienced chefs to give you
                the perfect café experience.

            </p>

            <div class="menu-divider"></div>

            <div class="menu-card-footer">

                <div class="menu-price">

                    <span class="menu-price-label">
                        STARTING FROM
                    </span>

                    <span class="menu-price-value">
                        $${randomprice}
                    </span>

                </div>

              
            </div>

        </div>

    `;

    return card;
}


/*===========================================
        LOAD MENU
===========================================*/

function loadMenu(topic) {

    alldeals.innerHTML = "";

    fetch(`https://pixabay.com/api/?key=51295509-7ce4d49982ceccf7ea8a0bbf3&q=${topic}&image_type=photo&per_page=${numberofimgs}`)
        .then(response => response.json())
        .then(data => {

            for (let i = 0; i < data.hits.length; i++) {

                let imageUrl = data.hits[i]?.webformatURL;

                if (!imageUrl) continue;

                alldeals.appendChild(
                    createMenuCard(imageUrl, topic)
                );

            }

        });

}


/*===========================================
        MEAL TYPE
===========================================*/

mealType.addEventListener("change", () => {

    const breakfast = [
        "Pancakes",
        "Oatmeal",
        "Toast",
        "Burrito",
        "Smoothie"
    ];

    const lunch = [
        "Salad",
        "Sushi",
        "Soup",
        "Burger",
        "Sandwich"
    ];

    const dinner = [
        "Pizza",
        "Steak",
        "Curry",
        "Pasta",
        "Tacos"
    ];

    loadMenu(mealType.value);

    foodType.options.length = 0;

    foodType.insertAdjacentHTML(
        "afterbegin",
        `<option disabled selected>Select Food Type</option>`
    );

    let selectedFoodArray = [];

    if (mealType.value === "breakfast") {

        selectedFoodArray = breakfast;

    }

    else if (mealType.value === "lunch") {

        selectedFoodArray = lunch;

    }

    else if (mealType.value === "healthyfood") {

        selectedFoodArray = dinner;

    }

    selectedFoodArray.forEach(food => {

        let option = document.createElement("option");

        option.value = food;

        option.innerText = food;

        foodType.appendChild(option);

    });

});


/*===========================================
        FOOD TYPE
===========================================*/

foodType.addEventListener("change", () => {

    loadMenu(foodType.value);

});


/*===========================================
        INITIAL LOAD
===========================================*/

window.addEventListener("load", () => {

    const allTopics = [

        "Pancakes",
        "Oatmeal",
        "Toast",
        "Burrito",
        "Smoothie",

        "Salad",
        "Sushi",
        "Soup",
        "Burger",
        "Sandwich",

        "Pizza",
        "Steak",
        "Curry",
        "Pasta",
        "Tacos"

    ];

    let topicofdeal = allTopics[
        Math.floor(Math.random() * allTopics.length)
    ];

    loadMenu(topicofdeal);

});