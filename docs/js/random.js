// Random Show Flash Card

// requst function 
var myJSON, category; // JSON Object, Category in dict
function request(value_cat) {
    let requestURL = 'word/dict.json'; // request file JSON
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            myJSON = JSON.parse(request.responseText);
            category = value_cat; // keep value of category in GLOBAL VARIBLE
            next(); 
        }
    };
    request.open("GET", requestURL, true);
    request.send();
}

// array category and type 
var index_cat, index_type;    // index of word, index of 2types
var type = ['word', 'kanji']; // type for front-card

// random value
function next() {
    index_cat = Math.floor(Math.random() * myJSON[category].length);
    index_type = Math.floor(Math.random() * 2);
    myFunction(); // function to show on card
}

// show value from JSON file to HTML
// myObj[catergory(หมวด)][indexของคำในหมวดนั้น][type[ประเภทเป็นญี่ปุ่น/คันจิ]]
function myFunction() {
    document.getElementById('text-front').textContent = (myJSON[category][index_cat][type[index_type]]);
    document.getElementById('text-back').textContent = myJSON[category][index_cat]['word'] + " ("+ myJSON[category][index_cat]['sound']+"), " + myJSON[category][index_cat]['kanji'];
    document.getElementById('text-back-meaning').textContent = myJSON[category][index_cat]['meaning'];
}