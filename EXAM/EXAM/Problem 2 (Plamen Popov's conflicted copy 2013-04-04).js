function Solve(args) {
    var tempArr = args[0].split(" ");
    var N = parseInt(tempArr[0]);       //Matrix rows
    var M = parseInt(tempArr[1]);       //Matrix columns
    var J = parseInt(tempArr[2]);       //Number of jump sequences

    tempArr = args[1].split(" ");       //Starting position
    var R = parseInt(tempArr[0]);       //Row
    var C = parseInt(tempArr[1]);       //Column

    var jumpsArray = new Array(J);
    var jump;

    var i = 0;

    for (i = 2; i < 2 + J; i++) {       //Creating jumps array
        tempArr = args[i].split(" ");
        jump = { dR: parseInt(tempArr[0]), dC: parseInt(tempArr[1]) };
        jumpsArray[i - 2] = jump;
        //console.log(jump)
    }

    var rabbitDen = new Array(N);       //Declaring the field
    for (i = 0; i < N; i++) {
        rabbitDen[i] = new Array(M);
    }

    for (i = 0; i < N; i++) {      //i = rows
        for (var cols = 0; cols < M; cols++) {
            rabbitDen[i][cols] = (cols + 1) + (i * M);
        }
    }

    var sum = 0;
    var jumpCounter = 0;
    var modifier = 1;
    var arrayOfJumpsLength = jumpsArray.length;

    var visited = new Array(N);

    for (i = 0; i < N; i++) {
        visited[i] = {};
    }

    while (visited[R][C] !== true && R >= 0 && R < N && C >= 0 && C < M) {
        if (jumpCounter >= arrayOfJumpsLength) {
            modifier++
        }   
        sum += rabbitDen[R][C];
      
        R += jumpsArray[Math.ceil(jumpCounter / modifier)].dR;
        C += jumpsArray[Math.ceil(jumpCounter / modifier)].dC;
        jumpCounter++;
        
        if (R < 0 && R >= N && C < 0 && C >= M) {
            //console.log("escaped " + sum)
            return "escaped " + sum;
        }
        visited[R][C] = true;
    }
    console.log()
    return "caught" + (jumpCounter+1);
}

Solve(["6 7 3", "0 0", "2 2", "-2 2", "3, -1"]);