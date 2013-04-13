function Solve(args) {
    var row = 0;
    var ftmlCode = new Array(args[0]);
    for (row = 1; row < args.length; row++) {
        ftmlCode[row - 1] = args[row];
    }
    var resultString = "";
    for (row = 0; row < ftmlCode.length; row++) {
        ftmlCode[row] = del(ftmlCode[row]);
        //return ftmlCode[row];
        //console.log(ftmlCode);
        resultString += ftmlCode[row] + "\r\n";
    }
    return resultString;
}

function del(lineToBeProcessed) {
    var check = 0;
    var start = [];
    var end = [0];
    for (var i = 0; i < lineToBeProcessed.length; i++) {
        if (lineToBeProcessed.substr(i, 5) === "<del>") {
            if (check === 0) {
                start.push(i);
            }
            i += 4;
            check++;
        }
        if (lineToBeProcessed.substr(i, 6) === "</del>") {
            if (check === 1) {
                end.push(i + 6);
            }
            i += 5;
            check--;
        }
    }
    start.push(lineToBeProcessed.length)

    var result = new String;
    for (var i = 0; i < start.length; i++) {
        result += lineToBeProcessed.substring(end[i], start[i]);
    }
    return result;
}
//Solve(["5", "So<rev><upper>saw</upper> txet em</rev>", "<lower><upper>here</upper></lower>", "<toggle><rev>ERa</rev></toggle> you", "<rev>noc</rev><lower>FUSED</lower>", "<rev>?<rev>already </rev></rev>", "<del>this should be deleted</del><del><del></del></del>"]);

Solve(["5", "some text here<del>text1<del>text2</del>text3</del>text4<del>this should be deleted</del> and some text here"]);