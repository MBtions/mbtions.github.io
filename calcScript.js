calculation = ""
let arr = Array.from(document.querySelectorAll("button")).forEach((button)=>{
    button.addEventListener('click', (e) => {
        console.log(e.target);
        prev = ""
        if (e.target.innerHTML === "=") {
            console.log("Res: "+eval(calculation))
        }
        else if (e.target.innerHTML === "AC"){
            calculation = ""
        } else {
            calculation += e.target.innerHTML
            console.log("Cal: "+calculation);
        }
    })
})
function calculate(){
    try{
        const result = eval(calculation);
        input.innerHTML = result;
        calculation='';
    } catch(e) {
        alert('Error!');
    }
}
/*
exp = ""
calculation = ""
input = document.getElementById("result");
expression = document.getElementById("expStr");
Array.from(document.querySelectorAll("button")).forEach((button)=>{
    button.addEventListener('click', (e) => {
        console.log(e.target);
        prev = ""
        if (e.target.innerHTML === "=") {
            calculation = eval(calculation);
            console.log("Res: "+eval(calculation))
            input.setAttribute("value", calculation);
        }
        else if (e.target.innerHTML === "AC"){
            calculation = ""
            exp = ""
            expression.setAttribute("value", exp);
            input.setAttribute("value", calculation);
        } else {
            calculation += e.target.innerHTML
            exp += e.target.innerHTML
            expression.setAttribute("value", exp)
            input.setAttribute("value", calculation);
            console.log("Cal: "+calculation);
        }
    })
})
function calculate(){
    try{
        const result = eval(calculation);
        input.setAttribute("value", result);
        calculation='';
    } catch(e) {
        alert('Error!');
    }
}
*/

/**
 * prev = ""
exp = ""
op = ""
calculation = ""
input = document.getElementById("result");
expression = document.getElementById("expStr");
Array.from(document.querySelectorAll("button")).forEach((button)=>{
    button.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.innerHTML === "=") {
            prev = calculation
            op = e.target.innerHTML
            calculation = eval(calculation);
            console.log("Res: "+eval(calculation))
            input.setAttribute("value", calculation);
            console.log("Op:"+op);
            console.log("Prev:"+prev);
        }
        else if (e.target.innerHTML === "AC"){
            calculation = ""
            op = ""
            exp = ""
            expression.setAttribute("value", exp);
            input.setAttribute("value", calculation);
            prev = calculation
            console.log("Op:"+op);
            console.log("Prev:"+prev);
        }
        else if (e.target.innerHTML === "C") {
            if (input !== "") {
                if (op !== "") {
                    //calculation = prev
                    calculation = calculation.slice(0, -1);
                    exp = exp.slice(0, -1);
                    input.setAttribute("value", calculation);
                    expression.setAttribute("value", exp);
                } 
                else {
                    console.log("Prev:"+prev);
                    calculation = prev
                    input.setAttribute("value", calculation);
                }
            }
        }
        else if (e.target.innerHTML === "%") {
            calculation += "/100"
            op = ""
            exp += e.target.innerHTML
            expression.setAttribute("value", exp);
            calculation = eval(calculation)
            input.setAttribute("value", calculation);
            prev = calculation
            console.log("Op:"+op);
            console.log("Prev:"+prev);
        }
        else {
            prev = calculation
            op = ""
            console.log("Op:"+op);
            calculation += e.target.innerHTML
            exp += e.target.innerHTML
            expression.setAttribute("value", exp)
            input.setAttribute("value", calculation);
            console.log("Cal: "+calculation);
            console.log("Prev:"+prev);
        }
    })
})
 */