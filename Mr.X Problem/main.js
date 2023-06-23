let arr = [0, 0, 0];
let timeUnit = [4, 5, 10];
function find(n) {
  let pr = 0;
  let profit = new Array(3).fill(0);

  if (n < 4) {
    return 0;
  } else {
    let temp = n - 4;
    profit[0] = temp * 1000;
    if (n >= 5) {
      temp = n - 5;
      profit[1] = temp * 1500;
      if (n >= 10) {
        temp = n - 10;
        profit[2] = temp * 3000;
      }
    }
  }

  const maxIndex = getMaxProfitIndex(profit);
  pr += profit[maxIndex];
  arr[maxIndex]++;
  const earnings = pr + find(n - timeUnit[maxIndex], arr, timeUnit);
  return earnings;
}

function getMaxProfitIndex(arr) {
  return arr.indexOf(Math.max(...arr));
}

function getMaxProfitIndex(profit) {
  if (profit[0] >= profit[1]) {
    if (profit[0] >= profit[2]) {
      return 0;
    } else {
      return 2;
    }
  } else if (profit[1] >= profit[2]) {
    return 1;
  } else {
    return 2;
  }
}

const earnings = find(13);
console.log("Earnings:", earnings);
console.log(`T: ${arr[0]}, P: ${arr[1]}, C: ${arr[2]}`);
