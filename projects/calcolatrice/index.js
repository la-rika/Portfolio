const numberButtons = document.querySelectorAll('[data-number'); // [] sintassi per richiamarae i data-
const operationButtons = document.querySelectorAll('[data-operation');
//const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const currentOperand = document.querySelector('[data-current-operand]');
var screen1 = '';
var screen2 = '';
var operation;
var flag = true;
var result;


numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (flag === false) {
            if(operation===''){
                screen2=screen2;
            }else{
                screen2 += button.innerText;
            }
            //currentOperand.innerText = screen1 + operation + screen2;
            console.log(screen2)

            switch (operation) {
                case '+':
                    result = Number(screen1) + Number(screen2);
                    currentOperand.innerText = result;
                    screen1 = result;
                    screen2 = '';
                    operation='';
                    console.log(result)
                    break;
                case '-':
                    result = Number(screen1) - Number(screen2);
                    currentOperand.innerText = result;
                    screen1 = result;
                    screen2 = '';
                    operation='';
                    console.log(result)
                    break;
                case '*':
                    result = Number(screen1) * Number(screen2);
                    currentOperand.innerText = result;
                    screen1 = result;
                    screen2 = '';
                    operation='';
                    console.log(result);
                    break;
                case ':':
                    result = Number(screen1) / Number(screen2);
                    currentOperand.innerText = result;
                    screen1 = result;
                    screen2 = '';
                    operation='';
                    console.log(result)
                    break;
            }
        } else {
            screen1 += button.innerText;
            currentOperand.innerText = screen1;
            console.log(screen1);
            console.log(flag)
        }

    })

});

operationButtons.forEach(button => {
    button.addEventListener('click', function () {
        operation = button.innerText;
        console.log(operation)
        flag = false;
        console.log(flag);

        switch (operation) {
            case '+':
                currentOperand.innerText = screen1 + operation;
                break;
            case '-':
                currentOperand.innerText = screen1 + operation;
                break;
            case '*':
                currentOperand.innerText = screen1 + operation;
                break;
            case ':':
                currentOperand.innerText = screen1 + operation;
                break;
        }
    })


})


//event listener per il segno uguale che non viene utilizzato
// equalsButton.addEventListener('click', function () {
//     switch (operation) {
//         case '+':
//             result = Number(screen1) + Number(screen2);
//             currentOperand.innerText = result;
//             screen1 = result;
//             screen2 = '';
//             console.log(result)
//             break;
//         case '-':
//             result = Number(screen1 - screen2);
//             currentOperand.innerText = result;
//             screen1 = result;
//             screen2 = '';
//             console.log(result)
//             break;
//         case '*':
//             result = Number(screen1 * screen2);
//             currentOperand.innerText = result;
//             screen1 = result;
//             screen2 = '';
//             console.log(result)
//             break;
//         case ':':
//             result = Number(screen1 / screen2);
//             currentOperand.innerText = result;
//             screen1 = result;
//             screen2 = '';
//             console.log(result)
//             break;
//     }
// })

allClearButton.addEventListener('click', function () {
    screen1 = '';
    screen2 = '';
    flag = true;
    currentOperand.innerText = '';
})


