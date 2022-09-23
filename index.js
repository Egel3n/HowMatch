function letterpoints(word) {
    let points = 0;

    for (let i of word) {
        switch (i.toUpperCase()) {
            case "A":
                points += 1
                break;

            case "B":
                points += 2
                break;

            case "C":
                points += 3
                break;
            case "Ç":
                points += 4
                break;
            case "D":
                points += 5
                break;
            case "E":
                points += 6
                break;
            case "F":
                points += 7
                break;
            case "G":
                points += 8
                break;
            case "Ğ":
                points += 9
                break;
            case "H":
                points += 10
                break;
            case "I":
                points += 11
                break;
            case "İ":
                points += 12
                break;
            case "J":
                points += 13
                break;
            case "K":
                points += 14
                break;
            case "L":
                points += 15
                break;
            case "M":
                points += 14
                break;
            case "N":
                points += 13
                break;
            case "O":
                points += 12
                break;
            case "Ö":
                points += 11
                break;
            case "P":
                points += 10
                break;
            case "R":
                points += 9
                break;
            case "S":
                points += 8
                break;
            case "Ş":
                points += 7
                break;
            case "T":
                points += 6
                break;
            case "U":
                points += 5
                break;
            case "Ü":
                points += 4
                break;
            case "V":
                points += 3
                break;
            case "Y":
                points += 2
                break;
            case "Z":
                points += 1
                break;

        }

    }

    return points;
}


function loveAlgorithm(pointsSum) {

    let result;

    if (pointsSum < 5 || pointsSum > 80) {
        result = 1;
    } else if (pointsSum === 15) {
        result = 100;
    } else if (pointsSum === 13 || pointsSum === 14 || pointsSum === 16 || pointsSum === 17) {
        result = 95;
    } else if (pointsSum <= 10) {
        result = 30;
    } else if (pointsSum < 13) {
        result = 50;
    } else if (pointsSum <= 30) {
        result = 90;
    } else if (pointsSum <= 40) {
        result = 80;
    } else if (pointsSum <= 60) {
        result = 70;
    } else if (pointsSum <= 80) {
        result = 60;
    } else {
        result = 0;
    }

    return result;
}

document.querySelector("#heart").addEventListener("click", function () {
    let name1 = document.querySelector("#your-name-input").value;
    let name2 = document.querySelector("#crush-name-input").value;

    let points1 = letterpoints(name1);
    let points2 = letterpoints(name2);

    let diffrences = Math.abs(points1 - points2)

    let result = loveAlgorithm(diffrences)


    document.querySelector("#heart").remove()

    document.querySelector(".middle-div").innerHTML = ` <div class="container">
    <div class="circular-progress">
        <span class="progress-value">0%</span>
    </div>

    <span class="text">Match Percent</span>
</div>`

    let circularProgress = document.querySelector(".circular-progress"),
        progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
        progressEndValue = result,
        speed = 25;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`
        circularProgress.style.background = `conic-gradient(#EE6983 ${progressStartValue * 3.6}deg, #ededed 0deg)`

        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);



})