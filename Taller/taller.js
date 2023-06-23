function area(){
    var base = document.getElementById("txtn1").value;
    var altura = document.getElementById("txtn2").value;
    var area = parseInt(base)*parseInt(altura);
    document.getElementById("res").innerHTML="El área es "+area+ " cm2"

}

function clean(){
    document.getElementById("txtn1").value="";
    document.getElementById("txtn2").value="";

}