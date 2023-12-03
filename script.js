calculation = ""
let arr = Array.from(document.querySelectorAll("button"));
arr.forEach((button)=>{
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