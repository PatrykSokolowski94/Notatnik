const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtns = document.getElementsByClassName('delete-note');
const deleteAllBtns = document.querySelector('.delete-all');


const note = document.querySelector('.note')
const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;

let cardID = 0;


const openPanel = () => {
    notePanel.style.display = 'flex';
}

const closePanel = () => {
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    textArea.value = '';
    category.selectedIndex = 0;
}


const addNote = () => {
    if (category.selectedIndex === 0) {
        error.style.visibility = 'visible';
        error.textContent = 'Wybierz kategorie!';
    }
    else if (textArea.value === '') {
        error.style.visibility = 'visible';
        error.textContent = 'Wpisz treść notatki!';
    }
    else {
        createNote();
        error.style.visibility = 'hidden';
    }
}

const createNote = () => {
    const newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID);
    
    newNote.innerHTML = `  <div class="note-header">
    <h3 class="note-title">${selectedValue}</h3>
    <button class="delete-note" onclick="deleteNote(${cardID})">
    <i class="fas fa-times icon"></i>
</button>
</div>
<div class="note-body">
   ${textArea.value}
</div>`
    

    noteArea.appendChild(newNote);
    cardID++;
    textArea.value = '';
    category.selectedIndex = 0;
    notePanel.style.display = 'none';
    changeColor(newNote)
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}

const changeColor = note => {
switch (selectedValue) {
    case 'Zakupy':
        note.style.backgroundColor = 'rgb(72,255,0)'
        break;
    case 'Praca':
        note.style.backgroundColor = 'rgb(255,243,0)'
        break;
    case 'Inne':
        note.style.backgroundColor = 'rgb(0,170,255)'
        break;
}
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete)
}


const deleteAllNotes = () => {
    noteArea.textContent = '';
}
addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtns.addEventListener('click', deleteAllNotes)

