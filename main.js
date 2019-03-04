//function to assign user input to correct list
const listFood = () => {
    //grabs value of textbox
    let userInput = document.getElementById(`name`).value;

    //grabs fruit ul id
    let fruitList = document.getElementById(`fruit-list`);
    //grabs vegetable ul id
    let vegetableList = document.getElementById(`vegetable-list`);

    //grabs id in fruit radiobutton
    let fruitItem = document.getElementById(`fruit`);

    //grabs id in vegetable radiobutton
    let vegetableItem = document.getElementById(`vegetable`);

    //creates li element
    let li = document.createElement(`LI`);
   
    //sets innertext of li element to user's input
    li.innerText = userInput;
    
    //condition checks which radio was selected- fruit or vegetable
    if (fruitItem.checked === true) {
        fruitList.appendChild(li);
    }   else {
        vegetableList.appendChild(li);
    }

};