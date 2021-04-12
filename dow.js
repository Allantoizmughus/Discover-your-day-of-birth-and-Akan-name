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

    function gender() {
        let gender;
        if ((form.gender[0].checked == true) || (form.gender[1].checked == true)) {
            if (form.gender[0].checked == true) {
                gender = 0;
            } else if (form.gender[1].checked == true) {
                gender = 1;
            }
            return gender;
        } else {
            alert("Please select your gender!");
            return;
        }
    }