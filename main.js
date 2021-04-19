
// Returns the random number generated + the hiragana
var randomLatin = () => {
    let keys = []
    if (simpleHiraganaCheckbox.checked) {
        // gets array of keys in object hiraganas
        keys = keys.concat(Object.keys( hiraganas )); // merges the array in a new array called keys
    }
    if (doubleHiraganaCheckbox.checked) {
        // gets array of keys in object hiraganasDouble
        keys = keys.concat(Object.keys( hiraganasDouble )); // merges the array in a new array called keys
    }
    // randomly takes a key from the array keys
    return keys[ Math.floor( keys.length * Math.random() ) ];
};

const hiraganaOutput = document.getElementById('hiragana'); // Area where the Hiraganas appear
const input = document.getElementById('input'); // Input box
const answerElement = document.getElementById('answer'); // Modal box for the answer
const simpleHiraganaCheckbox = document.getElementById('simpleHiraganaCheckbox'); // checkbox to make simple hiraganas appear
const doubleHiraganaCheckbox = document.getElementById('doubleHiraganaCheckbox'); // checkbox to make simple "double" hiraganas appear

let answer = randomLatin(); // Stores the value returned by randomLatin
hiraganaOutput.innerHTML = hiraganas[answer] || hiraganasDouble[answer]; // Displays the hiraganas on the screen

// Listens for the 'enter' key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // if the input value is equal to the answer: executes randomLation(), changes the top modal to display:none
        if (answer === input.value) {
            answer = randomLatin();
            hiraganaOutput.innerHTML = hiraganas[answer] || hiraganasDouble[answer];
            answerElement.style.display = 'none';
        } else { // if the input value is different from the answer: changes the top modal to display:flex, pushes the answer in modal
            answerElement.style.display = 'flex';
            answerElement.innerHTML = answer;
        }
        input.value = ''; // resets the input value to nothing
    }
})
