//code+gaming = coolmathgames.com
const container = document.querySelector('#container');
const add = document.querySelector('#add');

document.getElementById('add').addEventListener('click', function() {
    // Create a wrapper div for the new entry
    const entryWrapper = document.createElement('div');
    entryWrapper.classList.add('entry-wrapper');

    // Clone the diary section
    const diaryClone = document.getElementById('diary').cloneNode(true);
    // Clear the input fields in the cloned diary section
    diaryClone.querySelectorAll('input[type="text"]').forEach(input => input.value = '');

    // Clone the stats section
    const statsClone = document.getElementById('stats').cloneNode(true);
    // Clear the input fields in the cloned stats section
    statsClone.querySelectorAll('input[type="text"]').forEach(input => input.value = '');

    // Append the cloned sections to the entry wrapper
    entryWrapper.appendChild(diaryClone);
    entryWrapper.appendChild(statsClone);

    // Append the entry wrapper to the container
    container.appendChild(entryWrapper);
});