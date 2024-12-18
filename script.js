const filterBtn = document.querySelectorAll('.filter-btn')
// const url = 
const cardList = document.querySelector('.card-list')
const searchInput = document.querySelector('#searchInput')
const Text = document.querySelector('.Text')
const todayBirthday = document.querySelector('.today-birthday')
const data = async()=>{
    const response = await fetch(url)
    const data = await response.json()
    
    await displayData(data)
    await filterBtns(data)
    await searchBox(data)
    return data
}
data()

let clutter = ''
let getAllDataBtn = ''
const filterBtns = (data)=>{
    let filter;
    filterBtn.forEach((btn) =>{
        btn.addEventListener('click' , ()=>{
            filterBtn.forEach(b => b.classList.remove('active' , 'bg-zinc-300','shadow-lg'))
            btn.classList.add('active' , 'bg-zinc-300' , 'shadow-lg')

             filter = btn.dataset.filter

             if(filter === "all" ){
              
                  Text.innerHTML = "all Upcoming Birthday's"
                clutter = ''
                 displayData(data)
             }
             if(filter === "month"){
                const currentMonth = new Date().getMonth() + 1;
                const monthData = data?.filter(obj => new Date(obj.DOB2).getMonth() + 1 === currentMonth);
                 Text.innerHTML = "This Month Birthday's"
                clutter =''
               displayData(monthData)
             }
             if(filter === "today"){
                const today = new Date().getDate() ;
                const currentMonth = new Date().getMonth() + 1;
                const todayData = data?.filter(obj => new Date(obj.DOB2).getDate() === today && new Date(obj.DOB2).getMonth() + 1 === currentMonth);
                
                todayBirthday.innerHTML = 
                 Text.innerHTML = "Today Birthday's"
                clutter =''
             displayData(todayData)
             }
             if (filter === "week") {
                const currentDate = new Date();
            
                // Helper function to calculate the start of the week (Sunday)
                function getStartOfWeek(date) {
                    const dayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)
                    const startDate = new Date(date);
                    startDate.setDate(date.getDate() - dayOfWeek); // Subtract the day of the week
                    startDate.setHours(0, 0, 0, 0); // Set to start of day
                    return startDate;
                }
            
                // Helper function to calculate the end of the week (Saturday)
                function getEndOfWeek(date) {
                    const startDate = getStartOfWeek(date);
                    const endDate = new Date(startDate);
                    endDate.setDate(startDate.getDate() + 6); // Add 6 days to get Saturday
                    endDate.setHours(23, 59, 59, 999); // Set to end of day
                    return endDate;
                }
            
                const startOfCurrentWeek = getStartOfWeek(currentDate);
                const endOfCurrentWeek = getEndOfWeek(currentDate);
               // Filter data based on the week range
                const weekData = data?.filter(obj => {
                    const objDate = new Date(obj.DOB2);
                    objDate.setFullYear(currentDate.getFullYear()); // Make it year-agnostic for week comparison
            
                    return objDate >= startOfCurrentWeek && objDate <= endOfCurrentWeek;
                });
                 Text.innerHTML = 'this week'
                clutter =''
            
               displayData(weekData)
            }
            
  })})    }
    

const displayData = async(data)=>{
    const today = new Date().getDate() ;
    const currentMonth = new Date().getMonth() + 1;
    const todayData = data?.filter(obj => new Date(obj.DOB2).getDate() === today && new Date(obj.DOB2).getMonth() + 1 === currentMonth);
    
    todayBirthday.innerHTML ="Happy Birthday  "+ todayData?.map((elem)=> elem.Name)
   
    data?.sort((a, b) => daysUntilNextBirthday(a.DOB2) - daysUntilNextBirthday(b.DOB2));
   
   
    data?.map((elem)=>{

       clutter += `         <div class="card  w-full  ">
                  
                        <div class="bg-white/80 rounded-xl min-h-[32vh]  shadow-lg hover:-translate-y-1 transition-transform p-2 text-center">
                            <div class=" bg-red-200 rounded-full flex items-center justify-center w-10 h-10 m-auto mt-3 mb-2">
                                👤
                            </div>
                            <h3 class="font-semibold text-gray text-lg mb-2 text-center">${elem.Name}</h3>
                            <p class="text-sage mb-2 text-center">${elem.DOB}</p>
                            <p class="text-xl font-bold text-dark mb-1">Age   <span class="text-orange-500">${calculateAge(elem.DOB2)+1}</span></p>
                            <p class="text-sage mb-4">in <span class="font-semibold text-xl">${daysUntilNextBirthday(elem.DOB2)}</span> DAY's</p>
                         
                </div>
                  </div>`
    })
   
    cardList.innerHTML  = clutter
    
}


const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});





const calculateAge = (dob) => {
    const [ month, day ,year] = dob.split('/');
    const birthDate = new Date(`${year}-${month}-${day}`);
    const date = new Date();
    let age = date.getFullYear() - birthDate.getFullYear();
    const monthDifference = date.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && date.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
const daysUntilNextBirthday = (dob) => {
    const [month, day ] = dob?.split('/');
    const date = new Date();
    const currentYear = date.getFullYear();
    let nextBirthday = new Date(`${currentYear}-${month}-${day}`);

    if (date > nextBirthday) {
        nextBirthday.setFullYear(currentYear + 1);
    }

    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day
    const daysLeft = Math.round((nextBirthday - date) / oneDay);

    return daysLeft;
}



const searchBox = (data)=>{
    const overlay  = document.querySelector(".overlay")
    searchInput.addEventListener('focus', (e)=>{
        overlay.style.display = "block";
        e.preventDefault();
        e.target.focus({preventScroll: true});
    })
    searchInput.addEventListener("blur" , ()=>{
       overlay.style.display = "none";
    })
    
    
    searchInput.addEventListener('input', ()=>{
        var clutter2 ;
        if(searchInput.value === ""){
            
            document.querySelector(".searchdata").style.display = "none";
            clutter2 ='';
            
        }
        else{
            
            const filterArray = data?.filter(obj => obj.Name.toLowerCase().startsWith(searchInput.value.toLowerCase()) || obj.DOB.toLowerCase().startsWith(searchInput.value.toLowerCase()))
            filterArray?.map((obj)=>{   clutter2 +=`<div class="add flex items-center px-8 py-3 z-20 " id="${obj.ID}" >
                         <h3 class="add font-semibold">${obj.Name} | ${obj.DOB}</h3></button>
                          </div>`
                        })
                        document.querySelector(".searchdata").style.display = "block";
                        document.querySelector(".searchdata").innerHTML = clutter2  }
    
    }) }
searchBox()
