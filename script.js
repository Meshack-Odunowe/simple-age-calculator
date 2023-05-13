function calculateAge() {
  var birthDate = document.getElementById('birthDate').value;
  var birthYear = new Date(birthDate).getFullYear();
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;
  document.getElementById('result').textContent = "Your age is: " + age;
}
function calculateAge() {
  var birthDate = document.getElementById('birthDate').value;
  var today = new Date();
  var birthYear = new Date(birthDate).getFullYear();
  var birthMonth = new Date(birthDate).getMonth();
  var birthDay = new Date(birthDate).getDate();

  var age = today.getFullYear() - birthYear;
  var months = today.getMonth() - birthMonth;
  var days = today.getDate() - birthDay;

  // Adjust the age, months, and days based on the current date
  if (months < 0 || (months === 0 && days < 0)) {
    age--;
    months += 12;
  }

  if (days < 0) {
    var previousMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += previousMonthLastDay;
    months--;
  }

  document.getElementById('result').textContent = "Your age is: " + age + " years, " + months + " months, and " + days + " days.";
}
