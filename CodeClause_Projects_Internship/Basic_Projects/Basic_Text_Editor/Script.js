const textEditor = document.getElementById('text-editor');
const undoBtn = document.getElementById('undo-btn');
const redoBtn = document.getElementById('redo-btn');

let history = [];
let current = -1;

textEditor.addEventListener('input', () => {
    if (current < history.length - 1) {
        history = history.slice(0, current + 1);
    }
    history.push(textEditor.value);
    current++;
    updateUndoRedoButtons();
});

undoBtn.addEventListener('click', () => {
    if (current > 0) {
        current--;
        textEditor.value = history[current];
    }
    updateUndoRedoButtons();
});

redoBtn.addEventListener('click', () => {
    if (current < history.length - 1) {
        current++;
        textEditor.value = history[current];
    }
    updateUndoRedoButtons();
});

function updateUndoRedoButtons() {
    undoBtn.disabled = current === 0;
    redoBtn.disabled = current === history.length - 1;
}