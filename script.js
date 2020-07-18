function calculate() {
    var birthYear = document.getElementById("birthyear").value;
    var today = new Date();
    var presentYear = today.getFullYear();
    var age = (presentYear - birthYear) * 365;

    //input validation 
    if (birthyear > 2020 || birthyear < 0) {
        alert("Please enter a valid birthyear");
        return false;
      }

    var ele = document.getElementById("calcule");
    ele.textContent = "You are " + age + " days old.";
}