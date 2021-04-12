function dow() {
    var CC = parseInt(document.querySelector("#century").value);
    var YY = parseInt(document.querySelector("#year").value);
    var MM = parseInt(document.querySelector("#month").value);
    var DD = parseInt(document.querySelector("#day").value);
    var op =document.querySelector("#operator").value;
    var dayOfTheWeek;
    if (op == "run"){
        return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

    }
    var dayOfTheWeek=Math.abs((dow(20, 07, 05, 10).toFixed()));
    document.querySelector("#results").innerHTML=dayOfTheWeek;
}