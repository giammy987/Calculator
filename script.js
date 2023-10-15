
let num1="";
let num2="";
let operator=""

function showNum (number) {
    
    document.getElementById("screen").value += number;

}

function getOper(inputOperator) {

    num1 = document.getElementById("screen").value
    operator = inputOperator
    document.getElementById("screen").value = ""

}

function calculate() {
    let result = 0
    num2 = document.getElementById("screen").value

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    if (operator == "+") {
        result = num1+num2
    } else if (operator == "-") {
        result = num1-num2
    } else if (operator == "x") {
        result = num1*num2
    } else if (operator == "/") {
        result = num1/num2
    }

    result = parseFloat(result).toFixed(3)

    let resultStr = result.toString()
    let lenRes = resultStr.length
    

    if (resultStr[lenRes-1]== 0 && resultStr[lenRes-2] == 0 && resultStr[lenRes-3]== 0) {
        //document.getElementById("screen").value = result
        result = parseFloat(result)
        document.getElementById("screen").value = result
    } else {
        document.getElementById("screen").value = result
    }

}

function clearScreen() {

    document.getElementById("screen").value = "";
}
