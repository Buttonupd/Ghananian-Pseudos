function getName(params) {
    var Year = document.getElementById('year born').value;
    var month = document.getElementById('month').value;
    var dayOfTheMonth = document.getElementById('day').value;
    VarDate = newDate(`${Year} - ${month} - ${dayOfTheMonth}`);
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var result = document.getElementById('outcome');
    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var males = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var females = ['Akosua', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama' ];
    if (year == "" || year.Length < 4 || year.Length > 4) {
        alert('Please enter a valid year')
    } else if (month < 0 || month < 12) {
        alert("place a valid month")
    }
    
}