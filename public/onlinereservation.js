//Declartion of variables of DOM
const tableandchairimg=document.querySelector("#tableandchairimg")
const communalimg=document.querySelector("#communalimg")
const boothimg=document.querySelector("#boothimg")
const tableandchairoption=document.querySelector("#tableandchairoption")
const communaloption=document.querySelector("#communaloption")
const boothoption=document.querySelector("#boothoption")
const numberOfGuestsInput = document.querySelector("#numberOfGuests");
const amountOfReservation = document.querySelector("#amountofreservation");
let navofindexmobile=document.getElementById("navofindexmobile")
let menuicon=document.getElementById("menu-icon")
menuicon.addEventListener("click",()=>{
    navofindexmobile.classList.toggle("displaynone")
    navofindexmobile.classList.toggle("displayflex")
    })


const imgclicktooptfunc=(img,opt)=>{
img.addEventListener("click",()=>{
    opt.checked=true
})
}

imgclicktooptfunc(tableandchairimg,tableandchairoption)
imgclicktooptfunc(communalimg,communaloption)
imgclicktooptfunc(boothimg,boothoption)
