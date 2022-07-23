/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/
function createInputElm(label, type = "text") {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    let labelElm = document.createElement("label");
    labelElm.innerHTML = label;
    labelElm.appendChild(input);
    return labelElm;
}
// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>



// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`
let literal = `<h1>Hello</h1>`;
document.body.innerHTML = literal;

// Your code goes here

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(data) {
    let ul = document.createElement("ul");
    data.forEach(function(item) {
        let li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
    });
    return ul;
}
// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

function createTodoList(data) {
    let ul = document.createElement("ul");
    data.forEach(function(item) {
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.innerHTML = item.name;
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.checked = item.isDone;
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(p);
        li.appendChild(input);
        li.appendChild(span);
        ul.appendChild(li);
    });
    return ul;
}
// Your code goes here

// TEST
createTodoList([
    { name: 'Learn DOM', isDone: false },
    { name: 'Learn JS', isDone: true },
]);
createTodoList([
    { name: 'Learn DOM', isDone: false },
    { name: 'Learn React', isDone: true },
    { name: 'Learn JS', isDone: true },
]);