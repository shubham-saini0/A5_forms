function submitForm(){
    var val1=document.getElementById("p1").value;
    var val2=document.getElementById("p2").value;
    var val3=document.getElementById("p3").value;
    var result="";
    if(checkData(val1,val2,val3)){
    result=store(val1,val2,val3);
    }
    else
    result='<p>Invalid input</p>';
    display(result);
    }
    
function checkData(val1,val2,val3){
    if(val1==""&&val2==""&&val3=="")
    return false;
    else
    return true;
    }
    
function store(val1,val2,val3){
    let result="";
    parse_val2=parseInt(val2);
    parse_val3=parseInt(val3);
    if(parse_val2<5)
        result="Age not in limit";
        else if(parse_val2<8)
        {
            if(parse_val3<15)
            result="Hello "+val1+" !!! Your weight is less than recommended value of 15kg at an age of"+parse_val2;
            else if(parse_val3>20)
            result="Hello "+val1+" !!! Your weight is greater than recommended value of 20kg at an age of"+parse_val2;
            else
            result="Hello "+val1+" !!! Your weight is perfect";
        }
        else if(parse_val2<11)
        {
            if(parse_val3<21)
            result="Hello "+val1+" !!! Your weight is less than recommended value of 21kg at an age of"+parse_val2;
            else if(parse_val3>25)
            result="Hello "+val1+" !!! Your weight is greater than recommended value of 25kg at an age of"+parse_val2;
            else
            result="Hello "+val1+" !!! Your weight is perfect";
        }
        else if(parse_val2<16)
        {
            if(parse_val3<26)
            result="Hello "+val1+" !!! Your weight is less than recommended value of 26kg at an age of"+parse_val2;
            else if(parse_val3>30)
            result="Hello "+val1+" !!! Your weight is greater than recommended value of 30kg at an age of"+parse_val2;
            else
            result="Hello "+val1+" !!! Your weight is perfect";
        }
        else if(parse_val2<21)
        {
            if(parse_val3<31)
            result="Hello "+val1+" !!! Your weight is less than recommended value of 31kg at an age of"+parse_val2;
            else if(parse_val3>40)
            result="Hello "+val1+" !!! Your weight is greater than recommended value of 40kg at an age of"+parse_val2;
            else
            result="Hello "+val1+" !!! Your weight is perfect";
        }
        else
        result="Age not in limit";
        return result;
    }
    
function display(result)
    {
    document.getElementById("result").innerHTML='<p>'+result+'</p>';
    }
    
    