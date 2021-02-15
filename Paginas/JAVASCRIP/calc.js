const screen = document.querySelector(".window");
const keys = document.querySelector(".calc");
let operationStatus = false,
    number1, typeOperation;

screen.textContent = "0";

const calculator = ()=>{
    if(!keys)
    {
        console.log("number");
    }

    keys.addEventListener("click", e =>{
        let targ = e.target;
        let data = targ.dataset;
        
        // detectar si se pulso un numero
        if(data.number)
        {
            writeScreen(data.number); 
        }

        // detectar si se pulso una operacion
        if(data.math)
        {
            getOperation(data.math);
        }

        // detectar si se pulso otro botom

        if(data.operation)
        {
            runOperation(data.operation, number1, typeOperation);
        }
    })
}

const writeScreen = number => {
    if(screen.textContent === "0" || operationStatus == true){
        screen.textContent = number;
        operationStatus = false;
    }
    else if(number === "." && !screen.textContent.includes("."))
    {
        screen.textContent += number;
    }
    else if(number != ".")
    {
        screen.textContent += number;
    }
    else
    {
        null;
    }
}

const getOperation = operation => {
    operationStatus = true;
    number1 = Number(screen.textContent);
    typeOperation = operation;
    screen.textContent = operation;
}

const runOperation = (operation, number1, typeOperation) => {

    if(operation === "delete")
    {
        screen.textContent = "0";
    }
    else 
    {
        getResult(number1, typeOperation);
        operationStatus = true;
    }
}

const getResult = (number1, typeOperation) => {
    let number2 = Number(screen.textContent);

    switch(typeOperation)
    {
        case "+":
            screen.textContent = number1 + number2;
            break;
        case "-":
            screen.textContent = number1 - number2;
            break;
        case "*":
            screen.textContent = number1 * number2;
            break;
        case "/":
            screen.textContent = number1 / number2;
            break;
        default:
            break;
    }
}

calculator();
