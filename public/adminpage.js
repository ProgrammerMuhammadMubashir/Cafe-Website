const xValues = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15, 16];
let spanofchart=document.getElementById("spanof-chart")
const myChart = new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});
let yearnow=new Date().getFullYear()
spanofchart.innerText=`Monthly orders in year ${ yearnow } `



//
let flexSwitchCheckdarkmode=document.getElementById("flexSwitchCheck-darkmode")
let html=document.getElementsByTagName("html")[0]
let root=document.documentElement
let header=document.getElementsByClassName("navclassforjs")[0]
let acceptorder=document.getElementsByClassName("acceptorder")
let declinebutton=document.getElementsByClassName("declineorder")
let modal = document.getElementById('customModal');
let  openBtn = document.getElementsByClassName('openModalBtn');
let  closeBtn = document.getElementById('closeModalBtn');
let textareainmodal=document.getElementsByTagName("textarea")[0]
let textareainmodal2=document.getElementsByTagName("textarea")[1]
let feedbackcontainer=document.getElementById("feedback")
let clearfeedbacksbtn=document.getElementById("clearfeedbacks-btn")
let feedbackform=document.getElementById("feedbackform")
let removeorder=document.getElementsByClassName("removeorder")
let openModalBtn2=document.getElementsByClassName("openModalBtn2")
let customModal2=document.getElementById("customModal2")
let closeModalBtn2=document.getElementById("closeModalBtn2")

textareainmodal.value="Additional note here"
textareainmodal2.value="Write reason for declining order"


const darkmodefunc=()=>{
    html.setAttribute("data-bs-theme","dark")
    root.style.setProperty("--primarycolor--","white")
    header.style.backgroundColor="brown"
   
 Array.from(declinebutton).forEach(btn => {
     btn.style.backgroundColor="brown"
 });
 Array.from(removeorder).forEach(btn => {
     btn.style.backgroundColor="brown"
 });
 localStorage.setItem("darkmode","enable")
}
const lightmodefunc=()=>{
    html.removeAttribute("data-bs-theme","dark")
    root.style.removeProperty("--primarycolor--","white")
    html.setAttribute("data-bs-theme","light")
   root.style.setProperty("--primarycolor--","brown")
     header.style.backgroundColor="brown"
  
  Array.from(declinebutton).forEach(btn => {
    btn.style.backgroundColor="brown"
});
Array.from(removeorder).forEach(btn => {
  btn.style.backgroundColor="brown"
});
localStorage.clear()
}
flexSwitchCheckdarkmode.addEventListener("change",()=>{


    
if(flexSwitchCheckdarkmode.checked){
  darkmodefunc()
}
else if(!flexSwitchCheckdarkmode.checked ){
lightmodefunc()
}
})

window.addEventListener("load",()=>{
if(localStorage.getItem("darkmode")){
    flexSwitchCheckdarkmode.checked=true
    darkmodefunc()
}
else if(!localStorage.getItem("darkmode")){
    lightmodefunc()
}
})


  Array.from(openBtn).forEach((obtn)=>{
    obtn.addEventListener('click', () => {
      modal.style.display = 'block';
let relativecustomerorder=obtn.parentElement.parentElement.parentElement
let fullName = document.getElementById("fullName");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let date = document.getElementById("date");
  let time = document.getElementById("time");
  let duration = document.getElementById("duration");
  let numberOfGuests = document.getElementById("numberOfGuests");
  let seatingPlan = document.getElementById("seatingPlan");
  let basicdomadress=relativecustomerorder.firstElementChild
fullName.value=basicdomadress.firstElementChild.nextElementSibling.innerText
email.value=basicdomadress.nextElementSibling.firstElementChild.nextElementSibling.innerText
phone.value=basicdomadress.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
let realdate=new Date(basicdomadress.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText).toISOString().split('T')[0]
date.value=realdate

time.value=basicdomadress.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText.slice(0,5)
duration.value=basicdomadress.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText.charAt(1)
numberOfGuests.value=basicdomadress.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText.charAt(1)
let initalsforsittingPlan=basicdomadress.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
Array.from(seatingPlan.options).forEach((option)=>{
if(initalsforsittingPlan===option.innerText){
 option.selected=true
}
})
});
})

  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    Array.from(openModalBtn2).forEach((openbtn2)=>{
      openbtn2.addEventListener("click",()=>{
        let emailtodecline=document.getElementById("emailtodecline")
        let relativecustomerorder=openbtn2.parentElement.parentElement.parentElement
        let basicdomadress=relativecustomerorder.firstElementChild
        emailtodecline.value=basicdomadress.nextElementSibling.firstElementChild.nextElementSibling.innerText
    customModal2.style.display="block"
      })
    })
    closeModalBtn2.addEventListener("click",()=>{
  customModal2.style.display="none";
    })

    let feedbacklilength=document.getElementsByClassName("feedbackli").length
    clearfeedbacksbtn.addEventListener("click", (event) => {
      
  
      if (feedbacklilength === 0) {
        event.preventDefault()
        document.getElementById("msgaboutfeedback-two").innerText = "There is nothing to clear";
        setTimeout(() => {
          document.getElementById("msgaboutfeedback-two").innerText = "";
        }, 3000);
      }
       else {
        const z = confirm("Do you really want to clear all the feedbacks?");
        if (!z) {
          event.preventDefault()
        }
        else{
          feedbackform.submit()
        }
      }
    });
    



