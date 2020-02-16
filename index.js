function getName(params) {
    var Year = document.getElementById('year born').value;
    var month = document.getElementById('month').value;
    var dayOfTheMonth = document.getElementById('day').value;
    VarDate = newDate(`${Year} - ${month} - ${dayOfTheMonth}`);
    
}