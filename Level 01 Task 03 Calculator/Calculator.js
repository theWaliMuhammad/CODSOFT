let exp = '';

function display(val) {
    exp+=val;
    document.getElementById('result').value=exp;
 }

function del(){
    exp=exp.slice(0,-1)
    document.getElementById('result').value=exp
}

 function clear_() {
    exp=" "
    document.getElementById('result').value = exp;
}
 function ans() {
    if(exp.includes('÷')){
        exp=exp.replace('÷','/');
    }
    if(exp.includes('x')){
        exp=exp.replace('x','*');
    }
    let result=eval(exp)
    document.getElementById('result').value=result
 }