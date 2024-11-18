//code+gaming = coolmathgames.com
const container = document.querySelector('#container');
const add = document.querySelector('#add');
const submit = document.querySelector('#submit')
const diaryText = document.querySelectorAll('.diaryText');//How to select the input for dairyText
const avgText = document.querySelector('#avgText');//newAVG
const drank = document.querySelector('#drank');


function tailStyle(id,Class){   
    for(let i = 0; i < Class.length; i++){
        id.classList.add(Class[i]);}};

styleTest = ["bg-blue-600","border-4","border-black"];


//HERE NOW
const images = [
    './asset/css/images/water1.png',
    './asset/css/images/water2.png',
    './asset/css/images/water3.png',
    './asset/css/images/water4.png',
    './asset/css/images/water5.png',
];  
function getRandomImage(){
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}
//HERE NOW



document.getElementById('add').addEventListener('click', function(event) {
   

    // preventing defualt
    

        

    
        const entryWrapperEl = document.createElement('div')//most out for diary
        entryWrapperEl.classList.add('entry-wrapper')
        
        //created the variable for the imageContainerEl
        const imageContainerEl = document.createElement('div');//HERE NOW
        
        
        
        //diary section
        const diarySectionEl = document.createElement('section')// inside the entry wrapper div
        entryWrapperEl.appendChild(diarySectionEl)
        diarySectionEl.classList.add('diary')
        const diaryImageEl = document.createElement('img')
        diaryImageEl.classList.add('diary-image')
        const diaryTextEl = document.createElement('textarea')
        diaryTextEl.classList.add('diaryInput')
        diarySectionEl.classList.add('diaryText')
        diaryImageEl.src = getRandomImage();//HERE NOW
        
        container.appendChild(entryWrapperEl)
        diarySectionEl.appendChild(diaryImageEl)
        diarySectionEl.appendChild(diaryTextEl)
    
        //stats section
        const statsSectionEl = document.createElement('section')
        statsSectionEl.classList.add('stats')
    
        const waterIntakeEl = document.createElement('div')
        waterIntakeEl.classList.add('waterIntake')
        const waterIntakeInput = document.createElement('input')
        waterIntakeInput.classList.add('waterInput')
        waterIntakeInput.setAttribute('type', 'text')
        waterIntakeEl.appendChild(waterIntakeInput)
        waterIntakeEl.append('WATER INTAKE')
    
        const dateEl = document.createElement('div')
        dateEl.classList.add('date')
        const dateInput = document.createElement('input')
        dateInput.classList.add('dateInput')
        dateInput.setAttribute('type', 'text')
        dateEl.appendChild(dateInput)
        dateEl.append('DATE')
    

        entryWrapperEl.appendChild(statsSectionEl)
        statsSectionEl.appendChild(waterIntakeEl)
        statsSectionEl.appendChild(dateEl)
    
        
        
    //create a new entry
    
    tailStyle(diarySectionEl,styleTest);
    avgText.textContent =  waterAvg +'L';
});

document.getElementById('submit').addEventListener
('click', function(event) {

    const allEntries = (document.querySelectorAll('.entry-wrapper'))
    const allDiaries = document.querySelectorAll('.diaryInput')
    const allWaters = document.querySelectorAll('.waterInput')
    const allDates = document.querySelectorAll('.dateInput')
    console.log(allDiaries)
    const entriesToStore = []
    for(let i = 0; i < allEntries.length; i++){
        console.log(allDiaries[i].value)
        const diary = allDiaries[i].value
        const water = allWaters[i].value
        const date = allDates[i].value
        const obj = {
            diary, water, date
        }
        entriesToStore.push(obj)
    }
    console.log(entriesToStore)
    localStorage.setItem('entries', JSON.stringify(entriesToStore))
    location.reload(true);//newAVG
});


function renderEnteries(){
    const storeEnteries = JSON.parse(localStorage.getItem('entries'))
    console.log(storeEnteries);
    for (let i = 0; i < storeEnteries.length; i++){
        const entryWrapperEl = document.createElement('div')
        entryWrapperEl.classList.add('entry-wrapper')
        //diary section
        const diarySectionEl = document.createElement('section')
        entryWrapperEl.appendChild(diarySectionEl)
        diarySectionEl.classList.add('diary')
        const diaryImageEl = document.createElement('img')
        diaryImageEl.classList.add('diary-image')
        const diaryTextEl = document.createElement('textarea')
        diaryTextEl.value = storeEnteries[i].diary;//HERE CHANGE
        diaryTextEl.classList.add('diaryInput')
        diarySectionEl.classList.add('diaryText')
        diaryImageEl.src = getRandomImage();//HERE NOW


        container.appendChild(entryWrapperEl)
        diarySectionEl.appendChild(diaryImageEl)
        diarySectionEl.appendChild(diaryTextEl)
    
        //stats section
        const statsSectionEl = document.createElement('section')
        statsSectionEl.classList.add('stats')
        const waterIntakeEl = document.createElement('div')
        waterIntakeEl.classList.add('waterIntake')
        const waterIntakeInput = document.createElement('input')
        waterIntakeInput.classList.add('waterInput')
        waterIntakeInput.value = storeEnteries[i].water;//HERE CHANGE

        waterIntakeInput.setAttribute('type', 'text')
        waterIntakeEl.appendChild(waterIntakeInput)
        waterIntakeEl.append('WATER INTAKE')
    
        const dateEl = document.createElement('div')
        dateEl.classList.add('date')
        const dateInput = document.createElement('input')
        dateInput.classList.add('dateInput')
        dateInput.value = storeEnteries[i].date;//HERE CHANGE

        dateInput.setAttribute('type', 'text')
        dateEl.appendChild(dateInput)
        dateEl.append('DATE')
    
        entryWrapperEl.appendChild(statsSectionEl)
        statsSectionEl.appendChild(waterIntakeEl)
        statsSectionEl.appendChild(dateEl)
       

        //Avg total cal
        let waterAmount = JSON.parse(localStorage.getItem('entries'));
        let waterArray = [];
        let waterAvg = 0;
        let waterSum = 0;
        let revwaterArray = [];
        // Looping to get each water
        for (let i = 0; i < waterAmount.length; i++) {
            waterArray.push(waterAmount[i].water);
           
             waterSum += Number(waterArray[i]);
             waterAvg = waterSum/waterAmount.length;
             
        }
        console.log('Water Avg total is ' + waterAvg);//TOTAL AVG OF WATER
        console.log('waterSum '+ waterSum)
        console.log('The water amounts of each days are '+ waterArray);
            
        tailStyle(diarySectionEl,styleTest);

        avgText.textContent =  waterAvg +'L';//newAVG
        if(waterAmount.length === 1){
            drank.textContent = 'Comeback tomarrow! You only got one day!';//newAVG

        } else 
        {drank.textContent = 'You recorded your water intake ' + waterAmount.length + ' times!';}//newAVG
    }
}
renderEnteries();


