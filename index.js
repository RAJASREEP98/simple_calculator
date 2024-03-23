const screen=document.getElementById('screen');
function buttonClick(value)
    {
    screen.value +=value;//+= used for adding one more the number as like string.
    }
function clearScreen()
    {
        screen.value=""
    }
function result(value)
    {
        var result= eval(screen.value);
        screen.value=result;
    } 
    function backspace() {
        
        screen.value = screen.slice(0, -1);
    }
            
    function backspace() {
        let currentValue = screen.value;
        screen.value = currentValue.slice(0, -1);}