"use strict";

////////////////////////////////////////////
////// Frequency Counter

function anagram(s1, s2) {
  //0. length check

  if (s1.length !== s2.length) return false;

  let lookup = {};

  for (let i = 0; i < s1.length; i++) {
    lookup[s1[i]] = (lookup[s1[i]] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i++) {
    if (!lookup[s2[i]]) {
      return false;
    } else {
      lookup[s2[i]] -= 1;
    }
  }
  return true;
}

anagram("aacc", "ccac");

////////////////////////////////////////////
////// Multiple Pointers

function zeroSum(array) {
  let left = 0;

  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];

    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    }
  }
}

zeroSum([-4, -1, 0, 2, 3, 5]);

////////////////////////////////////////////
////// count Unique Values

function uniqueValues(array) {
  // let checker = {};
  // for (let val of array) {
  //   checker[val] = (checker[val] || 0) + 1;
  // }
  // console.log(checker);
  // console.log(Object.keys(checker).length);

  //순차적으로 진행 // 정렬이 되어있어야함.

  if (array.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;

      array[i] = array[j];
    }
  }
  return i + 1;
}

// console.log(uniqueValues([1, 1, 2, 3, 7, 8, 9, 10]));

////////////////////////////////////////////
////// Sliding Widow

function maxConsecutiveSum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(tempSum, maxSum);
  }
  console.log(maxSum);

  return maxSum;
}

maxConsecutiveSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// console.log(maxConsecutiveSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

////////////////////////////////////////////
////// Divide and Conquer
