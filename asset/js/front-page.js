//code+gaming = coolmathgames.com
const container = document.querySelector('#container');
const add = document.querySelector('#add');
const submit = document.querySelector('#submit')
const diaryText = document.querySelectorAll('.diaryText');//How to select the input for dairyText
let diaryArray = [];

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
getRandomImage();

document.getElementById('add').addEventListener('click', function(event) {
   

    // preventing defualt
    event.preventDefault();

        const entryWrapperEl = document.createElement('div')
        entryWrapperEl.classList.add('entry-wrapper')


        //created the variable for the imageContainerEl
        const imageContainerEl = document.createElement('div');
        imageContainerEl.classList.add('image-container');

          // add 5 random images
          for (let i = 0; i < 1; i++) {
            const imageEl = document.createElement('img');
            imageEl.src = getRandomImage();
            imageEl.classList.add('water-image');
            imageEl.setAttribute('data-number', i);
            imageContainerEl.appendChild(imageEl);
        }
        entryWrapperEl.appendChild(imageContainerEl);

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
        // waterIntakeInput.setAttribute('data-number', i)
        waterIntakeInput.setAttribute('type', 'text')
        waterIntakeEl.appendChild(waterIntakeInput)
        waterIntakeEl.append('WATER INTAKE')
    
        const dateEl = document.createElement('div')
        dateEl.classList.add('date')
        const dateInput = document.createElement('input')
        dateInput.classList.add('dateInput')
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

    }
}
renderEnteries();