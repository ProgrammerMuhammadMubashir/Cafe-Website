//Declartion of variables
const quote=document.querySelector("#quote")
let navofindexmobile=document.getElementById("navofindexmobile")
let menuicon=document.getElementById("menu-icon")


window.addEventListener("load",()=>{
    //Quotes to be loaded
    const random=Math.floor(Math.random()*10)

    const randomquote = [
        "Our cafe is where every sip feels like home",
        "At our cafe, we brew more than just coffee, we brew connections",
        "Come for the coffee, stay for the conversations",
        "Our cafe is the perfect place to relax, recharge, and connect",
        "Experience the warmth of great coffee and even better company",
        "Every cup tells a story at our cozy cafe",
        "Our cafe is your escape, your creative space, your second home",
        "Here, every moment is made better with a cup of coffee",
        "Find comfort, creativity, and community at our cafe",
        "At our cafe, we believe every sip is a chance to relax and unwind"
      ][random]
quote.innerText=randomquote

})

menuicon.addEventListener("click",()=>{
navofindexmobile.classList.toggle("displaynone")
navofindexmobile.classList.toggle("displayflex")
})