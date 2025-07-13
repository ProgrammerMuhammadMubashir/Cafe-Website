let alldeals=document.querySelector("#alldeals")
let mealType=document.querySelector("#mealType")
let foodType=document.querySelector("#foodType")
let navofindexmobile=document.getElementById("navofindexmobile")
let menuicon=document.getElementById("menu-icon")
let footer=document.getElementsByTagName("footer")[0]
let numberofimgs=parseInt(18)

menuicon.addEventListener("click",()=>{
    navofindexmobile.classList.toggle("displaynone")
    navofindexmobile.classList.toggle("displayflex")
    })

  

    



mealType.addEventListener("change",()=>{
  
    //Declaring neccessary food items name
    const foodTypenameforBreakfast = ["Pancakes", "Oatmeal", "Toast", "Burrito", "Smoothie"];
    const foodTypenameforLunch = ["Salad", "Sushi", "Soup", "Burger", "Sandwich"];
    const foodTypenameforDinner = ["Pizza", "Steak", "Curry", "Pasta", "Tacos"];
    alldeals.innerHTML=''
    fetch(`https://pixabay.com/api/?key=REPLACE_WITH_YOUR_KEY_FOR_LOCAL_TESTING=${mealType.value}&image_type=photo&per_page=${numberofimgs}`)
    .then(response => response.json())
    .then(data => {
        for(i=0;i<numberofimgs;i++){
          // Extracting the URL of the image
      let imageUrl = data.hits[i].webformatURL;
      // Creating an image element and appending it to the page
      let carditemsbycss=document.createElement("div")
      carditemsbycss.classList.add("carditems")
      alldeals.append(carditemsbycss)

      const randomprice = Math.floor(Math.random() * (50 - 10 + 1)) + 10

      let imgElement = document.createElement("img") 
      imgElement.classList.add("card-img")
      imgElement.classList.add(`${mealType.value}`)
      let carddiscbycss=document.createElement("span")
      let cardpricebycss=document.createElement("span")
      carddiscbycss.classList.add("card-disc")
      cardpricebycss.classList.add("card-price")
      carddiscbycss.innerText=`The fantastic ${mealType.value} item is truly one of our finest deals, crafted to delight your taste buds `
      cardpricebycss.innerText=`Price : ${randomprice}$`
      imgElement.src=imageUrl
      carditemsbycss.insertAdjacentElement("afterBegin",imgElement)
      carditemsbycss.insertAdjacentElement("beforEend",carddiscbycss)
      carditemsbycss.insertAdjacentElement("beforeEnd",cardpricebycss)
      
      } 
    })
    console.log(mealType.value);
    
    if(mealType.value==="breakfast"){
      foodType.options.length=0
      foodType.insertAdjacentHTML("afterbegin","<option disabled selected>Select Food Type</option>")
 foodTypenameforBreakfast.forEach((nameof)=>{
 let optionforbreakfast=document.createElement("option")
 optionforbreakfast.innerText=nameof
 optionforbreakfast.value=nameof
 foodType.append(optionforbreakfast)
 })
    }
    else if(mealType.value==="lunch"){
      foodType.options.length=0
      foodType.insertAdjacentHTML("afterbegin","<option disabled selected>Select Food Type</option>")
      foodTypenameforLunch.forEach((nameof)=>{
     
      let optionforlunch=document.createElement("option")
      optionforlunch.innerText=nameof
      optionforlunch.value=nameof
      foodType.append(optionforlunch)
      })
    }
    else if(mealType.value==="healthyfood"){
      foodType.options.length=0
      foodType.insertAdjacentHTML("afterbegin","<option disabled selected>Select Food Type</option>")
      foodTypenameforDinner.forEach((nameof)=>{
     
      let optionfordinner=document.createElement("option")
      optionfordinner.innerText=nameof
      optionfordinner.value=nameof
      foodType.append(optionfordinner)
      })
    }
    
})











window.addEventListener("load",()=>{

  let topicofdeal=[
    "Pancakes", "Oatmeal", "Toast", "Burrito", "Smoothie",
    "Salad", "Sushi", "Soup", "Burger", "Sandwich",
    "Pizza", "Steak", "Curry", "Pasta", "Tacos"
  ][Math.floor(Math.random()*15)]
      fetch(`https://pixabay.com/api/?key=REPLACE_WITH_YOUR_KEY_FOR_LOCAL_TESTING=${topicofdeal}&image_type=photo&per_page=${numberofimgs}`)
      .then(response => response.json())
      .then(data => {
          for(i=0;i<numberofimgs;i++){
            // Extracting the URL of the image
        let imageUrl = data.hits[i].webformatURL;
        // Creating an image element and appending it to the page
        let carditemsbycss=document.createElement("div")
        carditemsbycss.classList.add("carditems")
        alldeals.append(carditemsbycss)
  
        const randomprice = Math.floor(Math.random() * (50 - 10 + 1)) + 10
  
        let imgElement = document.createElement("img") 
        imgElement.classList.add("card-img")
        imgElement.classList.add(`${topicofdeal}`)
        let carddiscbycss=document.createElement("span")
        let cardpricebycss=document.createElement("span")
        carddiscbycss.classList.add("card-disc")
        cardpricebycss.classList.add("card-price")
        carddiscbycss.innerText=`The fantastic ${topicofdeal} is truly one of our finest deals, crafted to delight your taste buds `
        cardpricebycss.innerText=`Price : ${randomprice}$`
        imgElement.src=imageUrl
        carditemsbycss.insertAdjacentElement("afterBegin",imgElement)
        carditemsbycss.insertAdjacentElement("beforEend",carddiscbycss)
        carditemsbycss.insertAdjacentElement("beforeEnd",cardpricebycss)
   
    
        
        } 
      })
    
})




foodType.addEventListener("change",()=>{
  alldeals.innerHTML=''
    let topicofdeal=foodType.value
    fetch(`https://pixabay.com/api/?key=REPLACE_WITH_YOUR_KEY_FOR_LOCAL_TESTING=${topicofdeal}&image_type=photo&per_page=${numberofimgs}`)
    .then(response => response.json())
    .then(data => {
        for(i=0;i<numberofimgs;i++){
          // Extracting the URL of the image
      let imageUrl = data.hits[i].webformatURL;
      // Creating an image element and appending it to the page
      let carditemsbycss=document.createElement("div")
      carditemsbycss.classList.add("carditems")
      alldeals.append(carditemsbycss)

      const randomprice = Math.floor(Math.random() * (50 - 10 + 1)) + 10

      let imgElement = document.createElement("img") 
      imgElement.classList.add("card-img")
      imgElement.classList.add(`${topicofdeal}`)
      let carddiscbycss=document.createElement("span")
      let cardpricebycss=document.createElement("span")
      carddiscbycss.classList.add("card-disc")
      cardpricebycss.classList.add("card-price")
      carddiscbycss.innerText=`The fantastic ${topicofdeal} is truly one of our finest deals, crafted to delight your taste buds `
      cardpricebycss.innerText=`Price : ${randomprice}$`
      imgElement.src=imageUrl
      carditemsbycss.insertAdjacentElement("afterBegin",imgElement)
      carditemsbycss.insertAdjacentElement("beforEend",carddiscbycss)
      carditemsbycss.insertAdjacentElement("beforeEnd",cardpricebycss)
     
     
    
      } 
    })
})
