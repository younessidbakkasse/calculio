function calculate() {
    var birthyear = document.getElementById("birthyear").value;
    var sleep = (2020 - birthyear) * 0.3;
    var h3 = document.createElement('h3');
    var answer = document.createTextNode("You've slept " + sleep.toFixed(0) + " years in your life.");
    h3.appendChild(answer);
    document.getElementById('results').appendChild(h3);
    document.getElementById("birthyear").style.display = "none";
    document.getElementById("calcule").style.display = "none";
}