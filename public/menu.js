let alldeals = document.querySelector("#alldeals");
let mealType = document.querySelector("#mealType");
let foodType = document.querySelector("#foodType");
let navofindexmobile = document.getElementById("navofindexmobile");
let menuicon = document.getElementById("menu-icon");
let footer = document.getElementsByTagName("footer")[0];
let numberofimgs = 18; // parseInt is unnecessary here

menuicon.addEventListener("click", () => {
    navofindexmobile.classList.toggle("displaynone");
    navofindexmobile.classList.toggle("displayflex");
});

mealType.addEventListener("change", () => {
    const foodTypenameforBreakfast = ["Pancakes", "Oatmeal", "Toast", "Burrito", "Smoothie"];
    const foodTypenameforLunch = ["Salad", "Sushi", "Soup", "Burger", "Sandwich"];
    const foodTypenameforDinner = ["Pizza", "Steak", "Curry", "Pasta", "Tacos"];

    alldeals.innerHTML = '';

    fetch(`https://pixabay.com/api/?key=51295509-7ce4d49982ceccf7ea8a0bbf3&q=${mealType.value}&image_type=photo&per_page=${numberofimgs}`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < numberofimgs; i++) {
                let imageUrl = data.hits[i]?.webformatURL;
                if (!imageUrl) continue; // skip if image not found

                let carditemsbycss = document.createElement("div");
                carditemsbycss.classList.add("carditems");

                const randomprice = Math.floor(Math.random() * 41) + 10; // 10-50

                let imgElement = document.createElement("img");
                imgElement.classList.add("card-img", `${mealType.value}`);
                imgElement.src = imageUrl;

                let carddiscbycss = document.createElement("span");
                carddiscbycss.classList.add("card-disc");
                carddiscbycss.innerText = `The fantastic ${mealType.value} item is truly one of our finest deals, crafted to delight your taste buds`;

                let cardpricebycss = document.createElement("span");
                cardpricebycss.classList.add("card-price");
                cardpricebycss.innerText = `Price : ${randomprice}$`;

                carditemsbycss.appendChild(imgElement);
                carditemsbycss.appendChild(carddiscbycss);
                carditemsbycss.appendChild(cardpricebycss);

                alldeals.appendChild(carditemsbycss);
            }
        });

    console.log(mealType.value);

    // Update foodType options
    foodType.options.length = 0;
    foodType.insertAdjacentHTML("afterbegin", "<option disabled selected>Select Food Type</option>");
    let selectedFoodArray = [];
    if (mealType.value === "breakfast") selectedFoodArray = foodTypenameforBreakfast;
    else if (mealType.value === "lunch") selectedFoodArray = foodTypenameforLunch;
    else if (mealType.value === "healthyfood") selectedFoodArray = foodTypenameforDinner;

    selectedFoodArray.forEach(name => {
        let option = document.createElement("option");
        option.innerText = name;
        option.value = name;
        foodType.appendChild(option);
    });
});

window.addEventListener("load", () => {
    let allTopics = [
        "Pancakes", "Oatmeal", "Toast", "Burrito", "Smoothie",
        "Salad", "Sushi", "Soup", "Burger", "Sandwich",
        "Pizza", "Steak", "Curry", "Pasta", "Tacos"
    ];
    let topicofdeal = allTopics[Math.floor(Math.random() * allTopics.length)];

    alldeals.innerHTML = '';

    fetch(`https://pixabay.com/api/?key=51295509-7ce4d49982ceccf7ea8a0bbf3&q=${topicofdeal}&image_type=photo&per_page=${numberofimgs}`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < numberofimgs; i++) {
                let imageUrl = data.hits[i]?.webformatURL;
                if (!imageUrl) continue;

                let carditemsbycss = document.createElement("div");
                carditemsbycss.classList.add("carditems");

                const randomprice = Math.floor(Math.random() * 41) + 10;

                let imgElement = document.createElement("img");
                imgElement.classList.add("card-img", `${topicofdeal}`);
                imgElement.src = imageUrl;

                let carddiscbycss = document.createElement("span");
                carddiscbycss.classList.add("card-disc");
                carddiscbycss.innerText = `The fantastic ${topicofdeal} is truly one of our finest deals, crafted to delight your taste buds`;

                let cardpricebycss = document.createElement("span");
                cardpricebycss.classList.add("card-price");
                cardpricebycss.innerText = `Price : ${randomprice}$`;

                carditemsbycss.appendChild(imgElement);
                carditemsbycss.appendChild(carddiscbycss);
                carditemsbycss.appendChild(cardpricebycss);

                alldeals.appendChild(carditemsbycss);
            }
        });
});

foodType.addEventListener("change", () => {
    alldeals.innerHTML = '';
    let topicofdeal = foodType.value;

    fetch(`https://pixabay.com/api/?key=51295509-7ce4d49982ceccf7ea8a0bbf3&q=${topicofdeal}&image_type=photo&per_page=${numberofimgs}`)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < numberofimgs; i++) {
                let imageUrl = data.hits[i]?.webformatURL;
                if (!imageUrl) continue;

                let carditemsbycss = document.createElement("div");
                carditemsbycss.classList.add("carditems");

                const randomprice = Math.floor(Math.random() * 41) + 10;

                let imgElement = document.createElement("img");
                imgElement.classList.add("card-img", `${topicofdeal}`);
                imgElement.src = imageUrl;

                let carddiscbycss = document.createElement("span");
                carddiscbycss.classList.add("card-disc");
                carddiscbycss.innerText = `The fantastic ${topicofdeal} is truly one of our finest deals, crafted to delight your taste buds`;

                let cardpricebycss = document.createElement("span");
                cardpricebycss.classList.add("card-price");
                cardpricebycss.innerText = `Price : ${randomprice}$`;

                carditemsbycss.appendChild(imgElement);
                carditemsbycss.appendChild(carddiscbycss);
                carditemsbycss.appendChild(cardpricebycss);

                alldeals.appendChild(carditemsbycss);
            }
        });
});
