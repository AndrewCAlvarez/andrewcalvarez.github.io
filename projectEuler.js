function solveEuler1() {
  var sumList = [];
  var solution = 0;
  var answer1 = document.getElementById("answer1");

  for (i = 1; i < 1001; i++) {
    if (i % 3 == 0 || (i % 5 == 0 && i != 1000)) {
      sumList.push(i);
    }
  }

  for (j = 0; j < sumList.length; j++) {
    solution += sumList[j];
  }
  console.log("Solution 1: " + solution);
  answer1.innerHTML = solution;
}

solveEuler1();
