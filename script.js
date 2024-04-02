// let getStartBtn = document.querySelector('.getStartBtn');
// let page1 = document.querySelector('.page1');
let currentDate= document.querySelector('.currentDate');
let cards = document.querySelector('.cards');
let searchBar = document.querySelector('.searchBar');
let searchBtn = document.querySelector('.searchBtn');
let searchdata = document.querySelector('.searchdata');
let searchResult = document.querySelector('.searchResult');
const url = " " //paste your api url here
let products = document.querySelector('.products');



// Get the date and display it in the page 
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');

var mm = today.toLocaleString('default', { month: 'long' });
var yyyy = today.getFullYear();
var day = today.toLocaleString('default', { weekday: 'long' });
today = dd + "-"+ mm +"   ,"+day;

currentDate.innerHTML = today;

// getStartBtn.addEventListener("click" , () => {
//     page1.style.display = "none";
// });




// Fetch the data from the  API 
async function getData(){
    let response = await fetch(url);
    let data = await response.json();
   
   
reamainder(data)
hero(data)


    
  searchBar.addEventListener("input", function(){
    const filterArray = data.filter(obj => obj.Name.toLowerCase().startsWith(searchBar.value))
      
     console.log(filterArray)
     var clutter2;
     filterArray.forEach((obj)=>{
         clutter2+=`<div class="add flex  items-center px-8 py-3 " id="${obj.ID}">
        <button class="add flex" id="${obj.ID}">
        <i class="add ri-search-line font-semibold mr-5"></i>
        <h3 class="add font-semibold">${obj.Name}</h3></button>
     </div>`;
    
     })
    searchdata.addEventListener("click", function(e){
        console.log(e.target.ID)
    })

    

     if(searchBar.value === ""){
        document.querySelector(".searchdata").style.display = "none";
     }
     else{
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter2;
     }
   
    })
    searchBar.addEventListener("blur" , ()=>{
        document.querySelector(".searchdata").style.display = "none";
    })
} 
getData();




 function convertor(){
    searchBtn.addEventListener("click", async ()=>{
    let searchVal = searchBar.value.toUpperCase();
    let convertedFullName =searchVal.replace(" ", "%20");
    searchBar.value = "";
    let res = await fetch(`${url}/search?Name=${convertedFullName}`);
    let data2 = await res.json();
    
    let searchcard = ` <div class="w-[95%] h-50 absolute top-[17%] rounded-xl p-4 ml-4  z-10  flex justify-center items-center flex-col bg-white">
    <div class="absolute left-1 h-7 w-7"><i class="ri-expand-left-line"></i></div>
   <div class="w-20 h-20 bg-slate-400 rounded-xl "><img src="./png-clipart-iphone-world-emoji-day-man-iphone-electronics-face-thumbnail-removebg-preview.png" alt=""></div>
   <h2 class="text-xl">${data2[0].Name}</h2>
    <h2>${data2[0].DOB}</h2>
</div>`
searchResult.innerHTML = searchcard
  let exit = document.querySelector('.ri-expand-left-line');
    exit.addEventListener("click", ()=>{
        searchResult.innerHTML = "";
    })
    BirthdayAnalyser(data2)
})}

 
convertor()



function BirthdayAnalyser(data){
          // Student's date of birth
const studentDOB = new Date(data[0].DOB2);
console.log("Student's Date of Birth:", studentDOB);

// Upcoming birthday in 2024
const upcomingBirthday = new Date(`2024-${studentDOB.getMonth() + 1}-${studentDOB.getDate()}`);
console.log("Upcoming Birthday in 2024:", upcomingBirthday);

// Current date
const currentDate = new Date();
console.log("Current Date:", currentDate);

// Calculate the difference in milliseconds (until next birthday in 2024)
let differenceInMs;
if (currentDate < upcomingBirthday) {
  differenceInMs = upcomingBirthday - currentDate;
} else {
  upcomingBirthday.setFullYear(upcomingBirthday.getFullYear() + 1);
  differenceInMs = upcomingBirthday - currentDate;
}

// Convert milliseconds to days
const millisecondsInADay = 1000 * 60 * 60 * 24;
const daysLeftForBirthday = Math.floor(differenceInMs / millisecondsInADay);


const age = currentDate.getFullYear() - studentDOB.getFullYear();

console.log(`Number of days left for the upcoming birthday in 2024: ${daysLeftForBirthday} days`);

}

function hero(data4){
    data4.forEach((item) => { 
        const studentDOB = new Date(item.DOB2);
        const upcomingBirthday = new Date(`2024-${studentDOB.getMonth() + 1}-${studentDOB.getDate()}`);
        const currentDate = new Date();
 
        let differenceInMs;
        if (currentDate < upcomingBirthday) {
            differenceInMs = upcomingBirthday - currentDate;
        } else {
            upcomingBirthday.setFullYear(upcomingBirthday.getFullYear() + 1);
            differenceInMs = upcomingBirthday - currentDate;
        }
 
        const millisecondsInADay = 1000 * 60 * 60 * 24;
        const daysLeftForBirthday = Math.floor(differenceInMs / millisecondsInADay);
 
        const age = currentDate.getFullYear() - studentDOB.getFullYear();


        if(daysLeftForBirthday === 364){

          
           hero2(item.Name)
           
         
        }
        else{
            clutter4 = `  <div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[20rem] h-[15rem] bg-zinc-200 rounded-xl">
              <video src="./Blue Illustrative Happy Birthday Greeting Card (1).mp4" autoplay loop muted class="w-full h-full object-cover "></video>
            </div>
            
        </div>
          `
        
                products.innerHTML = clutter4;
        }
       


    })
    function hero2(firstname){
      
        if(firstname === undefined){
           console.log("no")
         }else{

    clutter4 = `  <div class="product w-fit rounded-xl p-2 bg-white relative">
    <div class="image w-[20rem] h-[15rem] bg-zinc-200 rounded-xl ">
      <img src="https://i.pinimg.com/originals/bc/fd/6b/bcfd6befdd0b46722e77bbbbbfe48c17.png" alt="" class="w-full h-full object-cover rounded-xl"/>
      <h1 class="absolute top-1/2 right-12 text-red-600 text-2xl font-semibold">${firstname}</h1>
      
    </div>
    
</div>
  `

        products.innerHTML = clutter4;
    }
}}





function reamainder(data3){
    var clutter = [];




    data3.forEach((item) => { 
        const studentDOB = new Date(item.DOB2);
        const upcomingBirthday = new Date(`2024-${studentDOB.getMonth() + 1}-${studentDOB.getDate()}`);
        const currentDate = new Date();
 
        let differenceInMs;
        if (currentDate < upcomingBirthday) {
            differenceInMs = upcomingBirthday - currentDate;
        } else {
            upcomingBirthday.setFullYear(upcomingBirthday.getFullYear() + 1);
            differenceInMs = upcomingBirthday - currentDate;
        }
 
        const millisecondsInADay = 1000 * 60 * 60 * 24;
        const daysLeftForBirthday = Math.floor(differenceInMs / millisecondsInADay);
 
        const age = currentDate.getFullYear() - studentDOB.getFullYear();

 
        clutter.push({
            name: item.Name,
            dob: item.DOB,
            daysLeft: daysLeftForBirthday,
            age: age,
            Phone:item.Phone
        });
    });
 
    clutter.sort((a, b) => a.daysLeft - b.daysLeft);
    
    var cards = "";
    clutter.forEach((item) => {
        cards += `<div>
        <div class="w-[95%] h-35 bg-[#F7E7FF] rounded-2xl mt-2 m-2 p-2 flex justify-center items-center flex-col  ">
            <div class="rounded-2xl"><img src="./png-clipart-iphone-world-emoji-day-man-iphone-electronics-face-thumbnail-removebg-preview.png" class="h-35 w-20 bg-orange-400 rounded-2xl" alt=""></div>
            <div class="text-center">
                <div>
                    <h2 class="text-xl">${item.name}</h2>
                    <h3 class="text-xl">${item.dob}</h3>
                </div>
                <div class=" ">
                    <h1 class="text-2xl font-bold">${item.age}</h1>
                   <h1 class="text-2xl text-blue-600"> in ${item.daysLeft} DAY's</h1> 

                </div>
                <div>
               
                <a href="https://api.whatsapp.com/send?phone= ${item.Phone}"><i class="ri-whatsapp-line bg-slate-100  text-4xl rounded-xl "></i></a>

                  
                </div>
            
            </div>
            

          </div> 
        
        </div>`;
    });
 
    document.querySelector('.cards').innerHTML = cards;


}







// async function searchFunctionality(data){
// try{
    
//   searchBar.addEventListener("focus" , ()=>{
//     document.querySelector('#overlay').style.display = "block";
//   })
//   searchBar.addEventListener("blur" , ()=>{
//     document.querySelector('#overlay').style.display = "none";
//   })
  

// }catch(e){
//     console.log(e)

// }
// }
// searchFunctionality()
