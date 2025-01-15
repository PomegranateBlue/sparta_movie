function solution(nums) {
  let reult = 0;
  let count = 0;
  //배열에서 가능한 3개의 수의 합을 산정
  //반복문을 통해 Math.sqrt(3개의 수의 합)까지 나누면서 계산
  //계산할 때 1외의 값이 나온다면 소수가 아님을 판별
  let sum = 0;
  let sumArr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];
        sumArr.push(sum);
      }
    }
  }
  sumArr.filter((num) => {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) count++;
  });
  return count;
}
