function run() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AcUk3FC6i/model.json', modelLoaded);
}
function modelLoaded() {
    classifier.classify(gotresults);
}
function gotresults(results, error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("sound_name").innerHTML = "I can hear:" + results[0].label;
        document.getElementById("sound_accuracy").innerHTML = "Accuracy: " + (results[0].condifence * 100).toFixed(2);
        document.getElementById("sound_name").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("sound_accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";
        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        if (results[0].label == "Bell") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (results[0].label == "Birds Chirping") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if (results[0].label == "Clap") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";

        }
        else{
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}