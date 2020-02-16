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
    
}