let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

const numberInput = document.querySelector('#numberInput');
const btnSubmit = document.querySelector(`input[type="submit"]`);
const btnAdd = document.querySelector(`button[type="submit"]`);
let output = document.querySelector("#output");

const addWords = document.querySelector(`input[type="text"]`)


btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    let userWords = addWords.value;

    words.push(userWords);
    console.log(words);
})


btnSubmit.addEventListener("click", () => {
    words.push(userWords);
    console.log(words);

    let userInput = Number(numberInput.value);
    words.map((item)=>{
        if (userInput === item.length){
            document.write(`<p> ${item} </p>`)
        }
    })
})