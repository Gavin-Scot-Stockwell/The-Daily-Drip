//code+gaming = coolmathgames.com
const container = document.querySelector('#container');
const add = document.querySelector('#add');
const submit = document.querySelector('#submit')
const diaryText = document.querySelectorAll('.diaryText');//How to select the input for dairyText
let diaryArray = [];




document.getElementById('add').addEventListener('click', function(event) {
   

    // preventing defualt
    event.preventDefault();

        const entryWrapperEl = document.createElement('div')
        entryWrapperEl.classList.add('entry-wrapper')
        //diary section
        const diarySectionEl = document.createElement('section')
        entryWrapperEl.appendChild(diarySectionEl)
        diarySectionEl.classList.add('diary')
        const diaryImageEl = document.createElement('img')
        diaryImageEl.classList.add('diary-image')
        const diaryTextEl = document.createElement('textarea')
        diaryTextEl.classList.add('diaryInput')
        diarySectionEl.classList.add('diaryText')
        
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
    
        const avgEl = document.createElement('div')
        avgEl.classList.add('avg')
        const avgP = document.createElement('p')
        avgP.textContent = 'Your Avg'
        avgEl.appendChild(avgP)

        entryWrapperEl.appendChild(statsSectionEl)
    
        statsSectionEl.appendChild(waterIntakeEl)
        statsSectionEl.appendChild(dateEl)
        statsSectionEl.appendChild(avgEl)
    
        

    //create a new entry

});

document.getElementById('submit').addEventListener
('click', function(event) {
    //entry-wrapper
    //diaryInput
    //waterIntake
    //dateInput
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

    // localStorage.setItem('diarys', JSON.stringify(diaryText));
    // JSON.stringify(localStorage.setItem('diarys',diaryText));

    
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
        // diaryTextEl.setAttribute('data-number', i)
        diarySectionEl.classList.add('diaryText')
        

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
        // waterIntakeInput.setAttribute('data-number', i)
        waterIntakeInput.setAttribute('type', 'text')
        waterIntakeEl.appendChild(waterIntakeInput)
        waterIntakeEl.append('WATER INTAKE')
    
        const dateEl = document.createElement('div')
        dateEl.classList.add('date')
        const dateInput = document.createElement('input')
        dateInput.classList.add('dateInput')
        dateInput.value = storeEnteries[i].date;//HERE CHANGE
        // dateInput.setAttribute('data-number', i)
        dateInput.setAttribute('type', 'text')
        dateEl.appendChild(dateInput)
        dateEl.append('DATE')
    
        const avgEl = document.createElement('div')
        avgEl.classList.add('avg')
        const avgP = document.createElement('p')
        avgP.textContent = 'Your Avg'
        avgEl.appendChild(avgP)

        entryWrapperEl.appendChild(statsSectionEl)
    
        statsSectionEl.appendChild(waterIntakeEl)
        statsSectionEl.appendChild(dateEl)
        statsSectionEl.appendChild(avgEl)


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
        
        revwaterArray = waterArray.reverse()
        selectWater = revwaterArray.slice();//putting into slices to add and make daily avg
    
        
        let sumSlice = 0;//setting outside for daily avg
        let sliceAvg = 0;
        let outAvg =[];
        console.log('============TOTAL============');
    
        for (let i = 0; i < selectWater.length; i++) {
            
            
            sumSlice += Number(selectWater[i]);
            
            sliceAvg = sumSlice/selectWater.length;
            
            outAvg.push(sliceAvg[i]) 
        }
        console.log('============SLICE '+ '^^^ '+ i + ' ^^^' +'============');
        console.log("selectWater "+ selectWater);
        console.log("sumSlice "+ sumSlice);
        console.log("sliceAvg "+ sliceAvg);
        
        console.log("outAvg "+ outAvg)

    }
       
   //use this to make arrays for each of the days
   //then sum and make avg

}

renderEnteries();


