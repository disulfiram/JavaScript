function Solve(params) {
    var length = parseInt(params[0]);
    var intArr = new Array(length);
    var i = 0;
    for (i = 0; i < length; i++) {
        intArr[i] = parseInt(params[i + 1]);
    }
    var counter = 0;
    var number = 0;

    for (i = 0; i < length- 1; i++) {
        while (intArr[i] <= intArr[i+1]) {
            i++;
            counter++
        }
        if (counter>0) {
            number++;
            counter = 0;
        }
        else if (intArr[i]>intArr[i+1]) {
            number++
        }
        if (i === length - 2 && intArr[i] > intArr[i + 1]) {
            number++
        }
    }
    
    //console.log(number);
    return number;
}

Solve(["7", "1", "2", "-3", "4", "4", "0", "1"]);

Solve(["6", "1", "3", "-5", "8", "7", "-6"]);

Solve(["9", "1", "8", "8", "7", "6", "5", "7", "7", "6"]);

Solve(["9", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);

Solve(["9", "9", "8", "7", "6", "5", "4", "3", "2", "1"]);