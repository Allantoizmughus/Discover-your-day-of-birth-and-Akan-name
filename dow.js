function dow(){
    let dateInput = document.getElementById("date").value;
    let date = new Date(dateInput);

    if (!!date.valueOf()) {
        let year = date.getFullYear().toString();
        let dayOfWeek = date.getDay();
            return dayOfWeek;
        } else {
            alert("Please select your birthday.");
            return;
        }
    }    