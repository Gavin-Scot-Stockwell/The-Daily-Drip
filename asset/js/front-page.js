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

function tailStyle(id, Class){
    for(let i = 0; i < Class.length; i++){
        id.classList.add(Class[i]);}};

const diaryDivStyle = ["flex","flex-col","justify-between", "items-center", "justify-center", "p-6", "gap-6", "border-4", "border-white", "rounded-md"]; 
const diarySectionStyle = ["flex", "flex-col","sm:flex-row","gap-8", "w-full", "items-center", "justify-center"];
const diaryImageStyle = ["block","sm:w-[220px]", "w-full", "h-[220px]", "m-4", "object-cover", "border-2", "border-black", "shadow-lg","rounded-lg"];
const diaryTextStyle = ["flex","flex-col","w-full","min-h-[250px]", "p-6","border-2","border-black","rounded-lg","bg-white", "shadow-lg", "focus:outline-none","focus:ring-2", "focus:ring-indigo-500"];
const statsSectionStyle = ["flex","flex-col","sm:flex-row","gap-6","p-6", "w-full", "items-center", "justify-center"];
const waterIntakeStyle = ["flex","flex-col","items-center","space-y-4","w-full", "max-w-md","h-auto","rounded-lg", "p-4", "bg-white", "shadow-lg", "rounded-lg"]
const waterInputStyle = ["w-full","py-2","border-2","border-black","rounded-md","focus:outline-none", "focus:ring-2","focus:ring-indigo-500", "items-center", "bg-white"]
const dateInputStyle = ["w-full", "px-4", "py-2", "border-2", "border-black", "rounded-md", "focus:outline-none", ",focus:ring-2", "focus:ring-indigo-500"]
const dateElStyle = ["flex","flex-col","items-center","space-y-4","w-full", "max-w-md","h-auto","rounded-lg", "p-4", "bg-white", "shadow-lg", "rounded-lg"];

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
        dateInput.type = ('date');
        dateEl.appendChild(dateInput)
        dateEl.append('DATE')

        entryWrapperEl.appendChild(statsSectionEl)
        statsSectionEl.appendChild(waterIntakeEl)
        statsSectionEl.appendChild(dateEl)
    
      //JS TAIL CSS
      tailStyle(entryWrapperEl, diaryDivStyle) 
      tailStyle(diarySectionEl, diarySectionStyle)
      tailStyle(diaryImageEl, diaryImageStyle) 
      tailStyle(diaryTextEl, diaryTextStyle) 
      tailStyle(statsSectionEl, statsSectionStyle) 
      tailStyle(waterIntakeEl, waterIntakeStyle)
      tailStyle(waterIntakeInput, waterInputStyle)
      tailStyle(dateInput, dateInputStyle)
      tailStyle(dateEl, dateElStyle)

      diaryTextEl.setAttribute('placeholder', 'Enter your diary entry here...');
        
    //create a new entry
    
    avgText.textContent =  waterAvg +'L';
});

document.getElementById('submit').addEventListener('click', function(event) {
    const allEntries = document.querySelectorAll('.entry-wrapper');
    const errorMessageEl = document.getElementById('error-message'); // Locate the error message element

    // Reset error message
    errorMessageEl.textContent = '';
    errorMessageEl.classList.add('hidden'); // Hide it initially

    // Check if there are any entries
    if (allEntries.length === 0) {
        event.preventDefault();
        errorMessageEl.textContent = 'No entries found. Please add an entry before submitting.';
        errorMessageEl.classList.remove('hidden'); // Show the error message
        return;
    }

    // Validate the last entry
    const latestEntry = allEntries[allEntries.length - 1];
    const diaryInput = latestEntry.querySelector('.diaryInput');
    const waterInput = latestEntry.querySelector('.waterInput');
    const dateInput = latestEntry.querySelector('.dateInput');

    // Check if any field is empty
    const diary = diaryInput?.value.trim();
    const water = waterInput?.value.trim();
    const date = dateInput?.value.trim();

    if (!diary || !water || !date) {
        event.preventDefault(); // Prevent submission
        errorMessageEl.textContent = 'Please fill out all fields in the current entry before submitting.';
        errorMessageEl.classList.remove('hidden'); // Show error message
        return;
    }

    // Proceed with saving
    const entriesToStore = [];
    for (let entry of allEntries) {
        const diary = entry.querySelector('.diaryInput')?.value.trim();
        const water = entry.querySelector('.waterInput')?.value.trim();
        const date = entry.querySelector('.dateInput')?.value.trim();
        entriesToStore.push({ diary, water, date });
    }

    localStorage.setItem('entries', JSON.stringify(entriesToStore));
    location.reload(true); // Reload the page
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
        try {
            // Get water intake entries from localStorage
            let waterAmount = JSON.parse(localStorage.getItem('entries'));
            if (!waterAmount) throw new Error("No entries found in localStorage");

            let waterArray = [];
            let waterSum = 0;

            // Looping to get each water
            for (let i = 0; i < waterAmount.length; i++) {
                waterArray.push(waterAmount[i].water);
                waterSum += Number(waterArray[i]);
            }

            // Calculate the average water intake
            let waterAvg = waterSum / waterAmount.length;

            console.log('Water Avg total is ' + waterAvg); // TOTAL AVG OF WATER
            console.log('waterSum ' + waterSum);
            console.log('The water amounts of each days are ' + waterArray);

            // Reverse the water array
            let revwaterArray = waterArray.reverse();
            let selectWater = revwaterArray.slice(); // Copy the reversed array

            let sumSlice = 0; // Setting outside for daily avg
            let outAvg = [];
            console.log('============TOTAL============');

            // Calculate daily averages
            for (let i = 0; i < selectWater.length; i++) {
                sumSlice += Number(selectWater[i]);
                let sliceAvg = sumSlice / (i + 1); // Calculate the average up to the current index
                outAvg.push(sliceAvg);
            }

            console.log('============SLICE ' + '^^^ ' + i + ' ^^^' + '============');
            console.log("selectWater " + selectWater);
            console.log("sumSlice " + sumSlice);
            console.log("sliceAvg " + sliceAvg);
            console.log("outAvg " + outAvg);

            renderEnteries();
        } catch (error) {
            // Display error message
            const errorMessageEl = document.getElementById('error-message');
            errorMessageEl.textContent = error.message;
            errorMessageEl.classList.remove('hidden');
        }

        avgText.textContent =  waterAvg +'L';//newAVG
        if(waterAmount.length === 1){
            drank.textContent = 'Come back tomorrow! You have completed one day!';//newAVG

        } else 
        {drank.textContent = 'You recorded your water intake ' + waterAmount.length + ' times!';}//newAVG
   
        //JS TAIL CSS
        tailStyle(entryWrapperEl, diaryDivStyle) //DIV
        tailStyle(diarySectionEl, diarySectionStyle) //SECTION
        tailStyle(diaryImageEl, diaryImageStyle) // DIARY IMG
        tailStyle(diaryTextEl, diaryTextStyle) // DIARY TEXT AREA
        tailStyle(statsSectionEl, statsSectionStyle) //
        tailStyle(waterIntakeEl, waterIntakeStyle)
        tailStyle(waterIntakeInput, waterInputStyle)
        tailStyle(dateInput, dateInputStyle)
        tailStyle(dateEl, dateElStyle)

        diaryTextEl.setAttribute('placeholder', 'Enter your diary entry here...');
    }
}
renderEnteries();


