let numberofbranches=document.querySelector("#numberofbranches")
let customersperday=document.querySelector("#customersperday")
let feedbackstats=document.querySelector("#feedbackstats")
const slide1=document.querySelector("#slide1")
let navofindexmobile=document.getElementById("navofindexmobile")
let menuicon=document.getElementById("menu-icon")
menuicon.addEventListener("click",()=>{
    navofindexmobile.classList.toggle("displaynone")
    navofindexmobile.classList.toggle("displayflex")
    })

   
      

let currentIndex=1
const sliderfunc=()=>{
  let arrayimages=  ["resources/slide1.webp","resources/slide2.webp","resources/slide3.jpg","resources/slide4.webp","resources/slide5.webp","resources/slide6.jpg"]
     currentIndex=(currentIndex+1)%arrayimages.length
         slide1.src=arrayimages[currentIndex]     
}
setInterval(() => {
   sliderfunc()
}, 4000);




setInterval(()=>{
let actualnumberofbranches=parseInt(numberofbranches.innerText)
if(actualnumberofbranches<50){
actualnumberofbranches+=1
numberofbranches.innerText=actualnumberofbranches  + "+ Branches"
}
},10)
setInterval(()=>{
let actualcustomersperday=parseInt(customersperday.innerText)
if(actualcustomersperday<1000){
    actualcustomersperday+=2
customersperday.innerText=actualcustomersperday + "+ Customers/day"
}
},1)
setInterval(()=>{
let actualfeedbackstats=parseInt(feedbackstats.innerText)
if(actualfeedbackstats<99){
actualfeedbackstats+=1
feedbackstats.innerText=actualfeedbackstats + "% Good feedback"
}
},2)
