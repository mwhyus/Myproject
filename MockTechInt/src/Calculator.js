const Calculator = function () {
  let index = 0;
  var splitArray = str.split("").reduce((arr, v, i) => {
    if (isNaN(parseInt(v))) {
      arr.push(str.slice(index, i));
      arr.push(v);
      index = i + 1;
    }
    return Arr;
  }, []);
  splitArray.push(str.slice(index));
  return splitArray;

  function findMultiplyIndex(arr) {
    return arr.findIndex((i) => i == "*");
  }

  function findDivideIndex(arr) {
    return arr.findIndex((i) => i == "/");
  }

  function findPlusIndex(arr) {
    return arr.findIndex((i) => i == "+");
  }

  function findMinusIndex(arr) {
    return arr.findIndex((i) => i == "-");
  }

  function multiply(arr) {
    let index = findMultiplyIndex(arr);
    arr[(index = parseInt(arr))];
  }
};

// Test Function do not edit
function Test(fun, result) {
  console.log(fun === result);
}

// const calculate = new Calculator()

// Test(calculate.evaluate('127'), 127)
// Test(calculate.evaluate('2 + 3'), 5);
// Test(calculate.evaluate('2 - 3 - 4'), -5);
// Test(calculate.evaluate('10 *  5 / 2'), 25);

// console.log("Bonus Test")
// Test(calculate.evaluate('10 + 6 / 2'), 13);
