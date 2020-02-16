function getName() { 
    var males = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var females = ['Akosua', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama' ];
    var dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var year = document.getElementById("born year").value;
    var month = document.getElementById("month").value;
    var dayOfTheMonth = document.getElementById("day").value;
    var date = new Date(`${year} - ${month} - ${dayOfTheMonth}`);
    var birthDay = date.getDay();
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var outcome = document.getElementById('outcome');
    
   
    if (year == "" || year.Length < 4 || year.Length > 4) {
        alert('Please enter a valid year')
    } else if (month < 0 || month > 12) {
        alert("place a valid month")
    } else if (dayOfTheMonth < 0 || dayOfTheMonth > 31) {
        alert('valid day')
    } else if (male.checked == false && female.checked == false) {
        alert('Specify')
    } else if (male.checked == true) {
        outcome.innerHTML = " Your Ghananian name would be " + males[birthDay], + " since you were born on "+ dayOfTheWeek[birthDay]
    } else if (female.checked == true) {
        outcome.innerHTML = "Your Ghananian name would be " + females[birthDay], + " since you were born on " + dayOfTheWeek[birthDay]
    } else {
        alert("run")
    }
    
}