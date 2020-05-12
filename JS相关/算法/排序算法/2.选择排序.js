/* 
Selection Sort (选择排序)

执行流程

① 从序列中找出最大的那个元素，然后与最末尾的元素交换位置✓执行完一轮后，最末尾的那个元素就是最大的元素

② 忽略①中曾经找到的最大元素，重复执行步骤①
*/

const arr = [23, 11, 54, 2, 6, 65, 78, 13, 9, 32, 69, 90, 20, 45, 76, 20];

// 这个循环是实现②
for (let j = arr.length - 1; j > 0; j--) {
  // 这里是实现① ≤从序列中找到最大元素
  let maxIndex = 0;
  for (let i = 1; i <= j; i++) {
    if (arr[i] >= arr[maxIndex]) {
      maxIndex = i;
    }
  }

  const max = arr[maxIndex];
  arr[maxIndex] = arr[j];
  arr[j] = max;
}

console.log(arr);
