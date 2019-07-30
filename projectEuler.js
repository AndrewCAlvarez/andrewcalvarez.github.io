solveEuler1();
solveEuler2();

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
  answer1.innerHTML = solution;
}

function solveEuler2() {
  var answer2 = document.getElementById("answer2");
  var nums = [];
  var sum = 0;

  function fibonacciGenerator(a, b) {
    c = a + b;

    if (c % 2 == 0 && c < 4000000) {
      nums.push(c);
      return fibonacciGenerator(b, c);
    } else if (c < 4000000) {
      return fibonacciGenerator(b, c);
    } else {
      return 0;
    }
  }

  fibonacciGenerator(0, 1);

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  answer2.innerHTML = sum;
}
