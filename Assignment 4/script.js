/* Task  1.2 */
console.log('Task  1.2')
for(let i = 1; i<21; i++){
    console.log(i)
}

/* Task  1.3 */
console.log('Task  1.3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for(let i = 0; i <numbers.length; i++) {
    if(numbers[i]%3 == 0) {
        console.log("eple")
    }
    else if(numbers[i]%5 == 0) {
        console.log("kake")
    }
    else {
        console.log(numbers[i])
    }
}

/* Task  1.4 */
document.getElementById('title').innerHTML = "Hello, JavaScript";

/* Task  1.5 */
function changeDisplay() {
    document.getElementById('magic').style.display = "none";
}

function changeVisibility() {
    document.getElementById('magic').style.display = "block";
    document.getElementById('magic').style.visibility = "hidden";
}

function reset() {
    document.getElementById('magic').style = ""
}

/* Task 1.6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

for(i=0;i<technologies.length;i++) {
    const node = document.createElement("li");
    tech = document.createTextNode(technologies[i]);
    node.appendChild(tech);
    document.getElementById('tech').appendChild(node);
}
